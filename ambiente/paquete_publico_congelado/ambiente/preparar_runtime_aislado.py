#!/usr/bin/env python3
"""Preparar PostgreSQL/PostGIS y runtimes de prueba nuevos en ws-steven, sin producción."""
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import urlopen
from urllib.error import HTTPError, URLError
from datetime import datetime, timezone
import os, json, secrets, socket, subprocess, time

assert socket.gethostname() == 'ws-steven', 'Run this preparation only on ws-steven'
base = Path('/home/dev/hackathon-ambiental-20261007')
infra = base / 'infra_pruebas'
infra.mkdir(mode=0o700, exist_ok=True)
os.chmod(infra, 0o700)
data = infra / 'postgres_data'
bindir = Path('/usr/lib/postgresql/16/bin')
port = 55907
secretfile = infra / 'credenciales.json'
if secretfile.exists():
    private = json.loads(secretfile.read_text())
else:
    private = {k: secrets.token_urlsafe(36) for k in ['admin_password', 'pv_password', 'tv_password', 'session_secret']}
    secretfile.write_text(json.dumps(private))
    os.chmod(secretfile, 0o600)
pg_env = {k: os.environ[k] for k in ['PATH', 'HOME', 'USER', 'LOGNAME', 'LANG', 'TZ'] if k in os.environ}
pg_env.update(PGHOST='127.0.0.1', PGPORT=str(port), PGUSER='dev', PGPASSWORD=private['admin_password'], PGDATABASE='postgres', PGCONNECT_TIMEOUT='5')
public = {'prepared_at_utc': datetime.now(timezone.utc).isoformat(), 'host': 'ws-steven', 'postgres_port': port, 'bind_address': '127.0.0.1', 'data_directory': str(data), 'credentials_directory_private': True, 'production_connections_used': False, 'original_environment_files_copied': False, 'applications': []}

def run_private(args, *, cwd=None, env=None, log_name='setup.log', stdin=None, timeout=90):
    log = infra / log_name
    with log.open('a') as out:
        os.chmod(log, 0o600)
        proc = subprocess.run(args, cwd=cwd, env=env, input=stdin, text=True, stdout=out, stderr=subprocess.STDOUT, timeout=timeout)
    if proc.returncode:
        raise RuntimeError('Preparation command failed; private log: ' + log_name)

def admin(sql, database='postgres'):
    result = subprocess.run(['psql', '-X', '-v', 'ON_ERROR_STOP=1', '-A', '-t'], env={**pg_env, 'PGDATABASE': database}, input=sql, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=15)
    if result.returncode: raise RuntimeError('Isolated test database operation failed; private stderr withheld.')
    return result.stdout.strip()

def guarded(url):
    parsed=urlparse(url)
    assert parsed.hostname=='127.0.0.1' and parsed.port==port and 'test' in parsed.path.lower(), 'Test connection guard failed'
    return url

if not (data / 'PG_VERSION').exists():
    with socket.socket() as probe: probe.bind(('127.0.0.1', port))
    password_file = infra / 'init_password'
    password_file.write_text(private['admin_password']+'\n'); os.chmod(password_file,0o600)
    run_private([str(bindir/'initdb'), '-D', str(data), '-U', 'dev', '--auth-local=peer', '--auth-host=scram-sha-256', '--pwfile='+str(password_file)])
    password_file.unlink()
if subprocess.run([str(bindir/'pg_ctl'), '-D', str(data), 'status'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode:
    run_private([str(bindir/'pg_ctl'), '-D', str(data), '-l', str(infra/'postgres.log'), '-o', '-h 127.0.0.1 -p '+str(port)+' -k '+str(infra), 'start'])
assert admin('SHOW data_directory;') == str(data), 'Refusing to use an existing unrelated cluster'

for role, password in [('pv_hackathon_runtime_test', private['pv_password']), ('tv_hackathon_login_test', private['tv_password'])]:
    if admin("SELECT count(*) FROM pg_roles WHERE rolname='"+role+"';")=='0':
        admin('CREATE ROLE '+role+" LOGIN PASSWORD '"+password+"' NOSUPERUSER NOBYPASSRLS NOCREATEDB NOCREATEROLE;")
for dbname, owner in [('pv_hackathon_test','pv_hackathon_runtime_test'), ('territorio_hackathon_test','dev')]:
    assert 'test' in dbname
    if admin("SELECT count(*) FROM pg_database WHERE datname='"+dbname+"';")=='0':
        admin('CREATE DATABASE '+dbname+' OWNER '+owner+';')

for project, dbname, login, password, app_port in [
    ('presupuesto-vivo','pv_hackathon_test','pv_hackathon_runtime_test',private['pv_password'],43007),
    ('territorio-vivo','territorio_hackathon_test','tv_hackathon_login_test',private['tv_password'],43008)]:
    cwd=base/'worktrees'/project
    test_url=guarded('postgresql://'+login+':'+password+'@127.0.0.1:'+str(port)+'/'+dbname)
    migration_url=guarded('postgresql://dev:'+private['admin_password']+'@127.0.0.1:'+str(port)+'/'+dbname)
    env={k:os.environ[k] for k in ['PATH','HOME','USER','LOGNAME','LANG','TZ'] if k in os.environ}
    env.update(DATABASE_URL=test_url,SESSION_SECRET=private['session_secret'],AUTH_SECRET=private['session_secret'],APP_URL='http://127.0.0.1:'+str(app_port),NEXT_TELEMETRY_DISABLED='1',NODE_ENV='development')
    if project=='presupuesto-vivo':
        env['DATABASE_URL_TEST']=test_url
        run_private(['node','--import','tsx','scripts/db/migrate.ts'],cwd=cwd,env=env,log_name=project+'-migrations.log')
    else:
        env.update(DATABASE_MIGRATION_URL=migration_url,DATABASE_RUNTIME_ROLE='tv_application_runtime',DATABASE_SSL='disable')
        run_private(['node','--import','tsx','scripts/production-migrate.ts'],cwd=cwd,env=env,log_name=project+'-migrations.log')
        admin('GRANT tv_application_runtime TO tv_hackathon_login_test;',dbname)
    config_keys=['DATABASE_URL','DATABASE_URL_TEST','DATABASE_MIGRATION_URL','DATABASE_RUNTIME_ROLE','DATABASE_SSL','SESSION_SECRET','AUTH_SECRET','APP_URL']
    envfile=cwd/'.env.local'
    if envfile.exists():
        existing=envfile.read_text()
        if '127.0.0.1:'+str(port) not in existing:raise RuntimeError('Refusing to overwrite pre-existing worktree environment')
    envfile.write_text('\n'.join(k+'='+env[k] for k in config_keys if k in env)+'\n');os.chmod(envfile,0o600)
    item={'project':project,'worktree':str(cwd),'database_name':dbname,'database_host':'127.0.0.1','database_port':port,'test_name_guard_passed':True,'migrations_exit_code':0,'private_test_env_file':str(envfile),'test_environment_generated_new':True,'app_port':app_port}
    item['table_count']=int(admin("SELECT count(*) FROM information_schema.tables WHERE table_schema='public';",dbname))
    item['runtime_role_safe']=admin("SELECT (NOT rolsuper AND NOT rolbypassrls)::int FROM pg_roles WHERE rolname='"+login+"';",dbname)=='1'
    if project=='territorio-vivo':item['postgis_version']=admin('SELECT postgis_lib_version();',dbname)
    pidfile=infra/(project+'.pid')
    pid=int(pidfile.read_text()) if pidfile.exists() else None
    running=False
    if pid:
        try:os.kill(pid,0);running=True
        except ProcessLookupError:pass
    if not running:
        with socket.socket() as probe:probe.bind(('127.0.0.1',app_port))
        log=(infra/(project+'-runtime.log')).open('a');os.chmod(infra/(project+'-runtime.log'),0o600)
        process=subprocess.Popen(['node','node_modules/next/dist/bin/next','dev','--webpack','--hostname','127.0.0.1','--port',str(app_port)],cwd=cwd,env=env,stdin=subprocess.DEVNULL,stdout=log,stderr=subprocess.STDOUT,start_new_session=True)
        pid=process.pid;pidfile.write_text(str(pid))
    item['runtime_pid']=pid
    public['applications'].append(item)

# Bounded readiness checks without cookies, registration or secrets.
for item in public['applications']:
    item['http_checks']=[]
    routes=['/api/auth/me','/api/cornare'] if item['project']=='presupuesto-vivo' else ['/api/auth/session','/api/cornare']
    for route in routes:
        endpoint='http://127.0.0.1:'+str(item['app_port'])+route
        result={'endpoint':endpoint,'method':'GET'}
        for attempt in range(8):
            try:
                with urlopen(endpoint,timeout=8) as response:
                    result['http_status']=response.status;body=response.read(300000)
                try:
                    obj=json.loads(body);result['json_response']=True
                    if isinstance(obj,dict):result['json_keys']=list(obj)
                except ValueError:result['json_response']=False
                break
            except HTTPError as exc:result['http_status']=exc.code;break
            except (URLError,TimeoutError):
                if attempt==7:result['status']='unavailable_after_bounded_startup_wait'
                else:time.sleep(1)
        item['http_checks'].append(result)
    item['server_process_alive']=True
    try:os.kill(item['runtime_pid'],0)
    except ProcessLookupError:item['server_process_alive']=False
public['complete_flow_e2e_verified']=False
(base/'infra_pruebas/readiness.json').write_text(json.dumps(public,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(public,ensure_ascii=False))
