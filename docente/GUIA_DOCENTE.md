# Guía del Docente — Evaluación Práctica

## Objetivo

El estudiante debe demostrar capacidad de **observar, detectar, justificar y proponer** mejoras en un Sistema de Información, aplicando los conceptos trabajados en la Unidad 1.

## Duración

**90 minutos** en clase. No es tarea para la casa.

## Preparación previa

1. Verificar que el repositorio `evaluacion-intro-si` esté publicado en GitHub.
2. Verificar que la aplicación web funcione localmente o en un servidor accesible.
3. Compartir el enlace del repositorio con los estudiantes.
4. Compartir el PPT de la evaluación (10 slides) — mostrar antes de iniciar.
5. Tener `RESPUESTAS_ESPERADAS.md`, `RUBRICA.md` y `CHECKLIST_CORRECCION.md` a mano (NO compartir con estudiantes).

## URL del laboratorio

**Repositorio:** (completar con la URL final al subirlo a GitHub)
- `github.com/KrizRoMe/evaluacion-intro-si`

**Aplicación web:** (completar con la URL final)
- Local: clonar el repo y abrir `index.html` o ejecutar `npx serve .`
- Opcionalmente, hacer deploy en GitHub Pages.

## Cómo iniciar el proyecto (modo local)

```bash
git clone https://github.com/KrizRoMe/evaluacion-intro-si
cd evaluacion-intro-si
npx serve .            # abre en http://localhost:3000
```

O simplemente abrir `index.html` en el navegador.

## Qué debe hacer el estudiante

1. **Explorar** la aplicación libremente (10–15 min).
2. **Detectar** problemas relacionados con los contenidos de la Unidad 1.
3. **Seleccionar 3 hallazgos** (los mejores que pueda justificar).
4. **Crear 3 GitHub Issues** usando la plantilla "Hallazgo SI" con etiqueta `hallazgo-si`.
5. **Completar el README** del repositorio con sus datos y reflexión.

## Distribución del tiempo (sugerida)

| Tiempo | Actividad |
|---|---|
| 10–15 min | Exploración libre de la aplicación |
| 20–25 min | Análisis de hallazgos |
| 30–35 min | Creación de las 3 Issues |
| 10 min | Revisión final y entrega |

## Problemas existentes (12 problemas)

Ver `RESPUESTAS_ESPERADAS.md` para el detalle de los 12 problemas introducidos en la aplicación.

Distribución:

- **3 problemas** en Componentes / Funcionamiento del SI
- **3 problemas** en Riesgos / CID
- **2 problemas** en Mantenimiento
- **2 problemas** en Ética
- **2 problemas** en Privacidad / Protección de datos

## Rúbrica

Ver `RUBRICA.md`.

## Cómo usar la IA correctora

La IA recibe:
- `RUBRICA.md`
- `RESPUESTAS_ESPERADAS.md`
- 3 Issues del estudiante

La IA debe evaluar **semánticamente** cada Issue, NO exigir coincidencia literal.

La IA debe aceptar:
- Respuestas equivalentes con palabras diferentes.
- Conceptos correctos explicados con palabras simples.
- Distintos órdenes de explicación.

La IA NO debe aceptar:
- Problemas inventados.
- Conceptos no relacionados con la Unidad 1.
- Soluciones incorrectas.
- Justificaciones incoherentes.

## Casos dudosos

### El estudiante reporta un problema válido pero que no está en RESPUESTAS_ESPERADAS

- **Si el problema es real y verificable en la aplicación:** aceptar como hallazgo válido. Otorgar puntos según la rúbrica.
- **Si el problema no es real o es forzado:** 0 en identificación del hallazgo. No penalizar el resto si la explicación es razonable.

### El estudiante usa palabras diferentes a las esperadas

- Evaluar semánticamente.
- Si el concepto coincide (ej: "cualquiera puede ver los datos" = "no hay control de acceso"), dar crédito completo.

### El estudiante solo escribe 2 Issues en vez de 3

- Evaluar las 2 Issues normalmente.
- Aplicar 0 al tercer Issue.
- La calidad global puede ajustarse según el trabajo presentado.

### El estudiante escribe más de 3 Issues

- Evaluar las 3 mejores Issues.
- Si las 3 mejores son razonables, dar crédito completo.
- Si el estudiante tiene Issues de baja calidad mezcladas con buenas, tomar las mejores.

### El estudiante no completa el README

- No penalizar la nota (es un documento de seguimiento, no parte de la rúbrica).
- Usar el README para verificar la identidad del estudiante.

## Recomendaciones para evitar revelar respuestas

- No mostrar la lista de los 12 problemas a los estudiantes.
- No hacer referencia a problemas específicos durante la evaluación.
- No publicar las respuestas esperadas en el repositorio público.
- Si los estudiantes preguntan "¿esto cuenta como problema?", responder con preguntas guía: "¿afecta a alguien?", "¿qué pasa si no se corrige?", "¿qué concepto de clase se relaciona?".
- Las `RESPUESTAS_ESPERADAS.md`, `RUBRICA.md` y demás archivos del docente deben estar en la carpeta `/docente/` del repositorio, pero **no enlazados** desde el README del estudiante.

## Notas finales

- La evaluación es **PERMISIVA**: un estudiante con 3 hallazgos reales bien explicados debe obtener 14–16.
- No exigir terminología académica perfecta.
- No exigir que el estudiante encuentre todos los problemas.
- Reconocer que la calidad importa más que la cantidad.
