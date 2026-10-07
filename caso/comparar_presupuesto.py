#!/usr/bin/env python3
"""Comparación financiera acotada; no estima eficacia ni el óptimo ambiental."""
from pathlib import Path
from datetime import datetime, timezone
from collections import Counter
import csv
import hashlib
import json

ROOT = Path(__file__).resolve().parent
source = ROOT / "catalogo_costos_reto.csv"
with source.open(encoding="utf-8", newline="") as stream:
    rows = list(csv.DictReader(stream))
costs = {row["id_local_no_codigo_mea"]: int(row["costo_millones_cop"]) for row in rows}
assert len(rows) == len(costs) == 15
assert all(row["indivisible"] == "si" for row in rows)
assert all(int(row["costo_cop"]) == int(row["costo_millones_cop"]) * 1_000_000 for row in rows)
budget = 5000
ids = list(costs)
feasible = []
for mask in range(1 << len(ids)):
    chosen = [key for bit, key in enumerate(ids) if mask & (1 << bit)]
    total = sum(costs[key] for key in chosen)
    if total <= budget:
        feasible.append({"ids": chosen, "count": len(chosen), "cost_millions_cop": total, "balance_millions_cop": budget - total})
maximum = max(item["count"] for item in feasible)
cheapest_next = sum(sorted(costs.values())[:maximum + 1])
assert cheapest_next > budget
definitions = {
    "antecedente_regional": ["RETO-04", "RETO-01", "RETO-09", "RETO-10", "RETO-07", "RETO-14"],
    "A_lista_regional_sin_SUDS": ["RETO-01", "RETO-04", "RETO-09", "RETO-07", "RETO-14"],
    "B_ecosistemas": ["RETO-01", "RETO-02", "RETO-03", "RETO-04", "RETO-14"],
    "C_drenaje": ["RETO-10", "RETO-01", "RETO-04", "RETO-14"],
    "D_seis_unidades_distintas": ["RETO-03", "RETO-04", "RETO-08", "RETO-09", "RETO-07", "RETO-14"],
    "E_seis_dimensiones_catalogo": ["RETO-03", "RETO-04", "RETO-08", "RETO-09", "RETO-14", "RETO-15"],
    "F_seis_dimensiones_con_suelos": ["RETO-03", "RETO-04", "RETO-07", "RETO-09", "RETO-14", "RETO-15"],
}
candidates = {}
for label, chosen in definitions.items():
    assert len(chosen) == len(set(chosen))
    total = sum(costs[key] for key in chosen)
    dimensions = sorted({next(row["dimension"] for row in rows if row["id_local_no_codigo_mea"] == key) for key in chosen})
    candidates[label] = {"ids": chosen, "measures": [next(row["medida"] for row in rows if row["id_local_no_codigo_mea"] == key) for key in chosen], "count": len(chosen), "catalogue_dimensions": dimensions, "catalogue_dimension_count": len(dimensions), "cost_millions_cop": total, "cost_cop": total * 1_000_000, "balance_millions_cop": budget - total, "financially_feasible": total <= budget, "environmental_eligibility": "pending", "status": "illustration_not_selected_portfolio"}
assert [candidates[key]["cost_millions_cop"] for key in definitions] == [6500, 4700, 4900, 4500, 5000, 4800, 5000]
assert maximum == 6 and candidates["D_seis_unidades_distintas"]["count"] == maximum
assert candidates["D_seis_unidades_distintas"]["catalogue_dimension_count"] == 5
assert candidates["E_seis_dimensiones_catalogo"]["catalogue_dimension_count"] == candidates["F_seis_dimensiones_con_suelos"]["catalogue_dimension_count"] == 6
result = {
    "computed_at_utc": datetime.now(timezone.utc).isoformat(),
    "source": source.name,
    "source_sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
    "budget_millions_cop": budget,
    "assumption": "At most one complete functional unit per priced catalogue entry. Repeated units and territorial/implementation eligibility are not evaluated.",
    "scope": "Financial feasibility only; no vulnerability effects, causal efficacy, locality or scenario response are calculated.",
    "subsets_examined": 1 << len(ids),
    "financially_feasible_subsets_including_empty": len(feasible),
    "feasible_counts": dict(sorted(Counter(item["count"] for item in feasible).items())),
    "conditional_maximum_count": maximum,
    "cheapest_seven_millions_cop": cheapest_next,
    "maximum_count_financial_candidates": [item for item in feasible if item["count"] == maximum],
    "illustrative_candidates": candidates,
    "environmental_optimum": None,
    "remaining_checks": ["Official counting/repetition rule", "Critical vulnerability and location of each unit", "MEA factor and indicator", "Actors and implementation viability", "Overlap with funded actions and between measures", "Reference/intermediate and SSP3-7.0/2060 contrast"],
}
(ROOT / "comparacion_financiera.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(json.dumps({key: result[key] for key in ("subsets_examined", "financially_feasible_subsets_including_empty", "feasible_counts", "conditional_maximum_count", "cheapest_seven_millions_cop")}, ensure_ascii=False))
