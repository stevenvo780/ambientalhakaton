# Revisión científica: Claude (P1, P2, P3 y pitch congelados)

**Autor:** Claude Opus 5.5, razonamiento xhigh, sesión local. Cuota desconocida y sin respaldo.

**Fecha verificada con `date` (Bogotá, 7 de octubre de 2026):** lectura desde las 11:25:23; primera emisión a las 11:27:00; corrección guardada después de las 11:29:58.

**Entradas:** la instantánea congelada `20261007T162456Z`. Los 11 SHA-256 completos de la tabla coinciden con el manifiesto.

| Archivo | SHA-256 |
|---|---|
| `entregables/p1_tablero.md` | `485a635e7afd6238af0cb35d20616339a8efd31181281613036feb55643cc791` |
| `entregables/p2_portafolio.md` | `24fbc101678fd9895ecdabcc6e95cb77e017cf19fd81a8702c120d7e83031a4f` |
| `entregables/p2_portafolio.csv` | `67da719f848475f82485bca6258bee99a768cd301fe6240a0c54bfac516dafbd` |
| `entregables/p2_justificacion.md` | `4b4ca1c42ce93d4c25f43ba45de33bd422f937f9fc4b9914af7c78f0706031e5` |
| `entregables/p2_comparacion_financiera.json` | `cb70858721e17e45e1073f667a6fe634f077fa346e102bf09f27dc3862852e45` |
| `entregables/p3_riesgo_residual.md` | `73e7cee4ed8ad5a1d7fc70f61aa1bbdb27ee6f25cab6d5ab40e921498c5977b5` |
| `entregables/p3_riesgo_residual.csv` | `d54a362ec9e758c290d052f0204cbbbab6909a80f93302cc54f226e8c4bc6e8f` |
| `entregables/variables_seguimiento.csv` | `e71825a4cf2489f954b1083ea74707cd529de8b06a90f52fba2f4b78ca5b808a` |
| `entregables/PITCH_BORRADOR.md` | `5b0bd88a469aee7a73233f3e1382a9e13cae9f59819285c2f8e3c141dadf9fe7` |
| `caso/brechas_escenarios_mea.md` | `245ac0432020a13c0ebfe4f99a3a90071f68432cbcb74204128d4c32c330fa77` |
| `caso/catalogo_costos_reto.csv` | `4bfa305f9ba4f0553ad9a2e51fa24a18ab544f14a8e602348522e46c5067f1f6` |

**Primarias:** M-E-2411 (hoja `Regional Valles SN`) y M-E-2897 (campo 15). Sin valores basales nuevos, eficacia, cambio de V ni robustez completa; el uso de M-E-2411 (celda B7) está en revisión. **[D]** dato · **[H]** inferencia · **[C]** corrección propuesta.

## Ya resuelto

No repito lo ya corregido: la regla uniforme, D6 como base provisional, el máximo de 6 condicionado, la frontera 14/SAT (P3, L18), las dependencias (P3, L45; PROP-D01 a D15), el intermedio pendiente y la celda B7.

**Pendiente en el pitch:** las líneas 41, 43, 49 y 53 siguen sin aplicar mis objeciones anteriores.

## Cinco objeciones materiales

### O1. La asignación contradice la prioridad declarada (Q1 y Q4)

**[D]** P1-H1 y P1-H2 priorizan biodiversidad y agua (filas 68, 69, 38 y 39, Muy alto o Alto). Aun así, D6 destina **2.800 de 5.000** (07 + 08 + 09) a seguridad alimentaria y hábitat, con V Bajo o Medio en todas sus celdas del corredor (filas 25, 28, 29, 75, 78 y 79), y solo 700 a la única unidad de biodiversidad (03). Los indicadores de las fichas 8, 9 y 10 **no miden biodiversidad ni agua**. Ese vínculo solo se sigue con PROP-FUNC-BIO (`variables_seguimiento.csv`, L16): local, fuera del MEA y sin línea base.

**[H]** El cobeneficio ecosistémico de 07, 08 y 09 es plausible, pero hoy no es medible con indicadores institucionales.

**[C]** En P2 y en el pitch, decir así la decisión: "Priorizamos la capacidad de gestión de la biodiversidad y la demanda de agua. El 56 % del fondo va a medidas rurales y urbanas del Plan Valles cuyo aporte a biodiversidad y agua es una hipótesis con indicador propuesto". O bien reasignar si el equipo no acepta ese sacrificio.

### O2. El agua queda atendida solo por el lado de la sensibilidad (contradice P1-H2)

**[D]** P1-H2 exige atender sensibilidad y capacidad. En D6, la unidad 04 se liga a InSensHIDRO-01 e InCaHIDRO-04 (`variables_seguimiento.csv`, L5–L6). **InCaHIDRO-01** (conservación hídrica) solo se liga a 05, que es comparador (L8), y está en el campo 15 de las fichas 3, 6 y 7; ninguna de esas unidades entra en D6.

**[C]** Declarar en P3, en la fila de recursos hídricos, que el déficit de **capacidad de conservación hídrica** queda sin unidad: es el sacrificio principal frente a N1. La condición de reapertura (PROP-D01 y D02, cuello de botella en el origen) ya existe; hay que nombrarla como tal.

### O3. Dónde intervenir: Marinilla sin unidad localizada (Q2)

**[D]**

- **Marinilla** reúne biodiversidad Muy alto (fila 68) y sensibilidad hídrica Alta (W38). En D6 solo recibe unidades compartidas (03 y 04 "prioridad R/M": P2, L43–44).
- **Guarne** recibe 08 y 09 (P2, L46–47). Ninguna se liga a su única celda Alta, infraestructura (fila 45). P3 (L17) solo atribuye a 09 y 14 un aporte de "capacidad/contexto".

**[H]** La localización de 08 y 09 en Guarne se apoya en la capacidad Baja de seguridad alimentaria y hábitat. Es defendible, pero no responde al problema más severo del corredor.

**[C]** Justificar en P2 cada sitio con la celda que atiende, o evaluar 07 u 08 en Marinilla si hay suelos o UPA ligados a su sistema abastecedor. En el pitch: "Marinilla se atiende con unidades de corredor; no hay intervención física propia".

### O4. La regla de conteo hace depender SAT de Salud

**[D]** La primera fila de reapertura de P3 (L73) condiciona SAT a que "el problema sanitario 15 también sea elegible", para conservar seis unidades (M6-7, P2, L93). La alternativa honesta es {03, 04, 08, 13, 14}: 4.200 con saldo de 800 y cinco unidades.

**[H]** Esto acopla una necesidad de alerta (fila 19, riesgo Alto; capacidad específica de alerta Muy baja según la matriz de la dimensión desastres) con un problema de salud sin evidencia. Admitir la unidad 15 solo para mantener el conteo contradice la propia regla de P2 (L31: "no relleno por precio").

**[C]** Separar las condiciones: si SAT es indispensable, mostrar la cartera de 5 unidades con su saldo; M6-7 solo procede si la unidad 15 es elegible por sí misma. El conteo no debe decidir la entrada de SAT.

### O5. El escenario no discrimina entre D6 y N1 (defensa de Q6)

**[D]**

- La matriz no publica S, CA ni V futuras.
- Para las celdas críticas, el riesgo cambia poco entre referencia, intermedio y SSP3 (P2, L140–147).
- Para desastres en Rionegro, el riesgo a 2060 cae en la **misma categoría (Medio)** en SSP1, SSP2 y SSP3, con valores que redondean a 0,321 y difieren en menos de 0,0001 (AT19, AX19 y BB19). **No son idénticos.** Lo confirmé en la primaria M-E-2411; la cifra BB coincide con P2 (L140–147).

**[H, condicionada]** Con los datos publicados, esas variaciones pequeñas no invierten la elección entre D6 y N1. Tampoco prueban causalidad ni eficacia. Con la información actual, la elección depende más de sitio, adicionalidad y función que del escenario.

**[C]** Decirlo en el pitch y en P3: "El contraste SSP3-7.0/2041–2060 (informe de amenazas, p. 6; celdas P y BB) no cambia la cartera ni la valida. Señala dónde revisar el diseño: 07 por la amenaza agrícola de Rionegro (P79) y 09 por la de hábitat de Guarne (P25). El intermedio SSP2-4.5/2040 es elección del equipo, por confirmar".

## Nueve preguntas

Q1 y Q4 requieren O1; Q2, O3; Q6, O5; Q7, O2 y O4. Q3 y Q5 (actores propuestos) son defendibles y Q8 queda resuelta en P3. Q9 solo es defendible para 03, 04 y 14: las unidades 07, 08 y 09 dependen de indicadores PROP.
