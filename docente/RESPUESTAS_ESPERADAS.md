# Respuestas Esperadas — Evaluación Práctica

## Información general

| Campo | Valor |
|---|---|
| Aplicación | Espacio Común (Instituto Cultural — reservas de espacios) |
| Total de problemas | 12 |
| Categorías | 5 |

---

## Resumen por categoría

| Categoría | Problemas |
|---|---|
| Componentes / Funcionamiento del SI | P01, P02, P03 |
| Riesgos CID | P04, P05, P06 |
| Mantenimiento | P07, P08 |
| Ética | P09, P10 |
| Privacidad / Protección de datos | P11, P12 |

---

## P01 — Proceso incorrecto: permite reservar fechas pasadas

- **Ubicación:** `reservar.html`, campo de fecha del formulario
- **Descripción:** El formulario no valida que la fecha seleccionada sea posterior a la fecha actual. El estudiante puede elegir una fecha de hace 3 meses.
- **Evidencia:** En el campo `<input type="date">` no existe atributo `min` y en `js/main.js` no hay validación temporal.
- **Categoría:** Componentes / Funcionamiento del SI — Proceso incorrecto
- **Concepto relacionado:** Proceso vs Procedimiento / Administración de SI
- **Explicación:** Un proceso de reserva debe validar que la fecha sea futura. Permitir fechas pasadas rompe el propósito del SI (gestionar reservas hacia el futuro) y genera registros inconsistentes.
- **Impacto:** Reservas duplicadas o inválidas, confusión administrativa, imposibilidad de gestionar correctamente los espacios.
- **Severidad sugerida:** Media
- **Solución:** Agregar validación `min={fecha_actual}` al input de fecha y validación en el lado del servidor (o en el JS en este caso ficticio).
- **Respuestas equivalentes aceptables:**
  - "El formulario no valida fechas pasadas"
  - "Se pueden reservar fechas del pasado"
  - "El campo fecha no tiene restricción temporal"
  - "Falta validación de fechas en el formulario"

---

## P02 — Componente mal utilizado: "Sistema" listado como persona del equipo

- **Ubicación:** `panel.html`, sección "Equipo del sistema"
- **Descripción:** En el panel de administración, aparece una entrada llamada "Sistema" con email `sistema@espaciocomun.pe` y avatar, como si fuera un miembro del equipo. Esto confunde el componente Personas con Software.
- **Evidencia:** Sección del panel con tarjetas de equipo. La tarjeta del "Sistema" tiene campos de persona pero representa un componente software.
- **Categoría:** Componentes / Funcionamiento del SI
- **Concepto relacionado:** Los 6 componentes del SI (Personas vs Software)
- **Explicación:** El componente "Personas" se refiere a usuarios, operadores y administradores reales. El software es un componente distinto (no una "persona"). Mezclarlos genera confusión sobre quién es responsable de qué.
- **Impacto:** Confusión sobre responsabilidades del equipo. Dificulta la auditoría y la rendición de cuentas.
- **Severidad sugerida:** Baja
- **Solución:** Eliminar la entrada "Sistema" de la sección de personas. Si se quiere mostrar el componente software, debe ir en una sección aparte llamada "Componentes del sistema" o "Infraestructura".
- **Respuestas equivalentes aceptables:**
  - "El Sistema aparece como persona"
  - "Software listado como persona del equipo"
  - "Confusión entre Personas y Software"
  - "Hay un componente Software listado como si fuera Persona"

---

## P03 — Inconsistencia en datos: fecha imposible 2026-02-30

- **Ubicación:** `mis-reservas.html`, una de las filas de la tabla de reservas
- **Descripción:** Una reserva muestra la fecha "30 de febrero de 2026" (que no existe, febrero tiene 28 o 29 días).
- **Evidencia:** Tabla de reservas con columna "Fecha". Una fila muestra `2026-02-30`.
- **Categoría:** Componentes / Funcionamiento del SI — Datos
- **Concepto relacionado:** Datos dentro del SI / Proceso vs Procedimiento
- **Explicación:** Los datos son un componente fundamental del SI. Si los datos almacenados son inválidos, el sistema pierde confiabilidad y las decisiones basadas en ellos pueden ser erróneas.
- **Impacto:** Decisiones administrativas incorrectas, pérdida de confianza en el sistema, posible generación de reportes erróneos.
- **Severidad sugerida:** Media
- **Solución:** Validar fechas al momento de ingreso. Agregar reglas de validación que impidan fechas inválidas.
- **Respuestas equivalentes aceptables:**
  - "Hay una fecha inválida"
  - "Fecha imposible en los datos"
  - "30 de febrero no existe"
  - "Datos corruptos en mis reservas"

---

## P04 — Confidencialidad: datos sensibles visibles sin autenticación

- **Ubicación:** `panel.html`, tabla principal de reservas
- **Descripción:** El panel muestra DNI, email y teléfono de TODOS los usuarios sin requerir autenticación. Cualquier visitante que conozca la URL puede ver datos personales.
- **Evidencia:** Tabla de reservas con columnas `DNI`, `Email`, `Teléfono`. No hay formulario de login previo.
- **Categoría:** Riesgos CID — Confidencialidad
- **Concepto relacionado:** Confidencialidad / Privacidad
- **Explicación:** La confidencialidad implica que solo personas autorizadas pueden acceder a cierta información. Mostrar datos personales sin control de acceso es una violación directa de la confidencialidad.
- **Impacto:** Exposición masiva de datos personales. Riesgo de suplantación de identidad, robo de datos, incumplimiento de la Ley 29733.
- **Severidad sugerida:** Alta
- **Solución:** Implementar autenticación obligatoria para acceder al panel. Mostrar solo datos necesarios según el rol. Aplicar enmascaramiento de datos sensibles (ej: mostrar solo últimos 4 dígitos del DNI).
- **Respuestas equivalentes aceptables:**
  - "Datos personales sin login"
  - "No hay autenticación en el panel"
  - "Cualquiera puede ver DNIs"
  - "Acceso sin restricción a datos personales"

---

## P05 — Integridad: campos editables permiten modificar datos de otros usuarios

- **Ubicación:** `mis-reservas.html`, sección de detalle de reservas
- **Descripción:** Los datos de las reservas se muestran con campos editables (`contenteditable="true"`), permitiendo que el usuario modifique directamente la información.
- **Evidencia:** Atributo `contenteditable="true"` en celdas con datos sensibles.
- **Categoría:** Riesgos CID — Integridad
- **Concepto relacionado:** Integridad
- **Explicación:** La integridad implica que la información solo puede ser modificada por personas autorizadas, de manera controlada. Permitir edición libre desde el navegador rompe la integridad: cualquier usuario podría modificar datos sin trazabilidad.
- **Impacto:** Modificación no autorizada de información. Pérdida de confiabilidad. Posible fraude o sabotaje.
- **Severidad sugerida:** Alta
- **Solución:** Eliminar `contenteditable`. Usar formularios controlados con autenticación y permisos. Registrar quién modifica qué y cuándo.
- **Respuestas equivalentes aceptables:**
  - "Los datos son editables sin control"
  - "Se pueden modificar reservas directamente"
  - "Falta control de integridad"
  - "contenteditable permite editar"

---

## P06 — Disponibilidad: banner contradictorio

- **Ubicación:** `index.html`, banner superior
- **Descripción:** El banner dice "Servicio actualmente no disponible por mantenimiento" pero la página sigue mostrando opciones de reserva activas.
- **Evidencia:** Banner con texto de indisponibilidad + botones de reserva habilitados.
- **Categoría:** Riesgos CID — Disponibilidad
- **Concepto relacionado:** Disponibilidad
- **Explicación:** La disponibilidad implica que el sistema debe ser accesible cuando se necesita. Un mensaje contradictorio genera confusión y desconfianza.
- **Impacto:** Usuarios no saben si pueden o no reservar. Posible pérdida de usuarios que interpretan el mensaje literalmente.
- **Severidad sugerida:** Baja
- **Solución:** Coordinar el estado del banner con la funcionalidad real. Si hay mantenimiento, deshabilitar las reservas. Si no, quitar el banner.
- **Respuestas equivalentes aceptables:**
  - "El banner dice no disponible pero sí se puede reservar"
  - "Mensaje contradictorio"
  - "Información inconsistente sobre disponibilidad"
  - "El servicio dice no disponible pero funciona"

---

## P07 — Mantenimiento correctivo: capacidad negativa (-1)

- **Ubicación:** `espacios.html`, ficha del espacio "Estudio C"
- **Descripción:** El espacio "Estudio C" muestra "Capacidad: -1 personas". Dato claramente roto.
- **Evidencia:** Tarjeta del espacio con texto `Capacidad: -1 personas`.
- **Categoría:** Mantenimiento — Correctivo
- **Concepto relacionado:** Mantenimiento correctivo
- **Explicación:** El mantenimiento correctivo corrige errores detectados. Este dato es un error evidente que debe corregirse para que el SI funcione correctamente.
- **Impacto:** Usuarios no pueden saber si el espacio es usable. Información poco confiable del catálogo.
- **Severidad sugerida:** Baja
- **Solución:** Corregir el dato (probablemente debería ser un número positivo o eliminarse el espacio). Agregar validación de entrada para evitar valores negativos.
- **Respuestas equivalentes aceptables:**
  - "La capacidad es negativa"
  - "Hay un dato mal escrito en espacios"
  - "Un espacio tiene capacidad -1"
  - "Error en los datos del espacio"

---

## P08 — Mantenimiento adaptativo: falta opción de espacios virtuales

- **Ubicación:** `reservar.html`, opciones del campo "Tipo de espacio"
- **Descripción:** El formulario solo permite reservar espacios físicos. No hay opción para reservar espacios virtuales (salas online), aunque el instituto ahora ofrece modalidades híbridas según su página de políticas.
- **Evidencia:** Select con opciones solo de espacios físicos.
- **Categoría:** Mantenimiento — Adaptativo
- **Concepto relacionado:** Mantenimiento adaptativo
- **Explicación:** El mantenimiento adaptativo permite que el SI se ajuste a cambios del entorno. Si el instituto ofrece modalidades híbridas, el sistema debería adaptarse.
- **Impacto:** Usuarios que necesitan espacios virtuales no pueden reservar. Pérdida de oportunidad de negocio.
- **Severidad sugerida:** Media
- **Solución:** Agregar opción "Virtual / Sala online" en el selector. Incluir campos relacionados (plataforma, enlace, etc.).
- **Respuestas equivalentes aceptables:**
  - "No hay opción de espacios virtuales"
  - "El sistema no se adaptó a modalidad híbrida"
  - "Falta soporte para reservas virtuales"
  - "No考虑了 espacios online"

---

## P09 — Decisión automatizada poco transparente: scoring sin explicación

- **Ubicación:** `panel.html`, sección "Scoring automático de usuarios"
- **Descripción:** El panel muestra un scoring de 0–100 para cada usuario, categorizándolos como "Riesgo alto/medio/bajo" sin explicar el algoritmo ni los criterios.
- **Evidencia:** Sección con `Score: 15/100 - Riesgo alto` para un usuario sin explicación.
- **Categoría:** Ética
- **Concepto relacionado:** Triada Técnico → Legal → Ético / Privacidad
- **Explicación:** Una decisión automatizada que afecta a usuarios (como "riesgo alto") debe ser transparente y explicable. Sin conocer el algoritmo, los usuarios no pueden cuestionar ni corregir.
- **Impacto:** Usuarios afectados por una decisión que no entienden. Posible discriminación algorítmica. Pérdida de confianza.
- **Severidad sugerida:** Alta
- **Solución:** Documentar y publicar el algoritmo. Permitir a los usuarios conocer los factores que afectan su score. Ofrecer mecanismo de revisión/apelación.
- **Respuestas equivalentes aceptables:**
  - "El scoring no se explica"
  - "Decisión automatizada sin transparencia"
  - "No sabemos cómo se calcula el riesgo"
  - "Algoritmo opaco"

---

## P10 — Práctica que perjudica al usuario: cesión de datos para marketing

- **Ubicación:** `reservar.html`, nota cerca del botón de confirmación
- **Descripción:** Al confirmar una reserva, se muestra: "Al reservar, autorizas el uso de tus datos para fines comerciales y de marketing" sin opción de negarse.
- **Evidencia:** Texto pequeño en letra tenue al lado del botón.
- **Categoría:** Ética
- **Concepto relacionado:** Consentimiento / Privacidad / Ley 29733
- **Explicación:** El consentimiento debe ser libre, informado, específico e inequívoco. Una cesión obligatoria de datos para marketing va en contra de estos principios.
- **Impacto:** Usuarios otorgan consentimiento sin darse cuenta. Uso de datos para fines distintos a los originalmente declarados. Posible infracción a la Ley 29733.
- **Severidad sugerida:** Media
- **Solución:** Separar el consentimiento para reserva del consentimiento para marketing. Ofrecer checkbox opcional. Hacer visible y claro el propósito de cada uso.
- **Respuestas equivalentes aceptables:**
  - "Ceden datos para marketing sin opción"
  - "Consentimiento no es libre"
  - "Obligan a aceptar uso comercial"
  - "No se puede negar el uso de datos"

---

## P11 — Solicitud innecesaria de datos: formulario pide 9+ campos

- **Ubicación:** `reservar.html`, formulario completo
- **Descripción:** El formulario pide: nombre, email, DNI, teléfono, fecha de nacimiento, dirección, contacto de emergencia, teléfono de emergencia, redes sociales. Para reservar un espacio solo se necesitan: nombre, email, fecha y hora.
- **Evidencia:** Múltiples campos con `<label>` innecesarios.
- **Categoría:** Privacidad / Protección de datos
- **Concepto relacionado:** Privacidad / Principio de proporcionalidad / Minimización de datos
- **Explicación:** El principio de proporcionalidad establece que no se deben recopilar datos que no sean necesarios para la finalidad declarada. Cada dato extra recopilado es un riesgo innecesario.
- **Impacto:** Mayor superficie de ataque. Datos personales innecesarios en el sistema. Infracción al principio de minimización.
- **Severidad sugerida:** Media
- **Solución:** Eliminar todos los campos que no son estrictamente necesarios para la reserva. Mantener solo: nombre, email, fecha, hora, espacio y motivo.
- **Respuestas equivalentes aceptables:**
  - "Piden demasiados datos"
  - "Formulario pide datos innecesarios"
  - "Viola el principio de proporcionalidad"
  - "Sobre-recolección de datos"

---

## P12 — Exposición de información: DNIs sin máscara

- **Ubicación:** `panel.html`, tabla de reservas
- **Descripción:** Los números de DNI aparecen completos sin enmascaramiento (ej: `45678901` en lugar de `****8901`).
- **Evidencia:** 10+ DNIs en texto plano en la columna DNI.
- **Categoría:** Privacidad / Protección de datos
- **Concepto relacionado:** Privacidad / Confidencialidad / Ley 29733
- **Explicación:** El DNI es un dato personal identificable. Mostrarlo completo expone a los usuarios a suplantación y otros riesgos. Las buenas prácticas (y la Ley 29733) indican que debe haber minimización de exposición.
- **Impacto:** Suplantación de identidad. Exposición innecesaria de datos sensibles.
- **Severidad sugerida:** Alta
- **Solución:** Enmascarar los DNIs (mostrar solo últimos 4 dígitos). Aplicar el mismo criterio a otros datos sensibles como teléfonos.
- **Respuestas equivalentes aceptables:**
  - "Los DNIs están completos"
  - "No enmascaran los datos"
  - "DNI visible en el panel"
  - "Exposición innecesaria de datos personales"

---

## Nota sobre equivalencias semánticas

El docente o la IA correctora debe aceptar respuestas que expresen el mismo hallazgo con palabras diferentes. Ejemplos:

- "El formulario no valida fechas" ≈ "Permite reservar fechas pasadas" ≈ "No hay restricción temporal"
- "Cualquiera puede ver los datos" ≈ "No hay autenticación" ≈ "Acceso sin control"
- "Piden demasiados datos" ≈ "Sobre-recolección" ≈ "Viola proporcionalidad"

La clave es que la **evidencia** (dónde ocurre y cómo comprobarlo) coincida con el problema descrito.
