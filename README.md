# CILSA-CursoFullStack

Ejercicio sobre hacer un formulario basico con HTML,CSS y Javascript

Actualizado con las recomendaciones de los compañeros que revisaron y testearon mi formulario

## Georgina Máscolo

| Tipo de prueba              | Resultado  | Comentarios                                 |
|----------------------------|-----------|---------------------------------------------|
| Smoke test                 | Aprobado  | -                                           |
| Contraste                  | Aprobado  | -                                           |
| Happy path                 | Rechazado | No redirige a página de éxito.              |
| Validación Campos          | Aprobado  | -                                           |
| Validación Mail            | Rechazado | Acepta formatos de email no válidos.        |
| Navegación por Teclado     | Aprobado  | -                                           |
| Responsiveness             | Rechazado | No es responsivo a mobile.                  |

1. **HappyPath:** Si bien no redirige a una pagina de exito, si se le incorporo al formulario un popup nativo de html (alert) ✅
2. **ValidacionMail:** Ahora el formulario acepta solo formatos de email validos (ya no sos bienvenido perez@perez) ✅
3. **Responsiveness:** Se agregaron medias-querys para que sea tablet y mobile responsive. ✅

## Juan jose Cuellar

| # | Sugerencia de mejora                                                                 |
|---|--------------------------------------------------------------------------------------|
| 1 | Incorporar mensajes personalizados de validación para mayor claridad.               |
| 2 | Utilizar etiquetas `<label>` descriptivas en lugar de `<p>`.                        |
| 3 | Añadir atributos de accesibilidad como `aria-label` y `aria-describedby`.           |
| 4 | Mejorar el contraste de colores para cumplir con los estándares WCAG.               |
| 5 | Separar el código JavaScript en un archivo externo para mayor organización.         |

2. Se incorporo las etiquetas label descriptivas en lugar de las etiquetas p ✅
3. Se agregaron los atributos de accesibilidad como aria-label ✅
4. Se mejoro el contraste en el modo oscuro para cumplir los estandares WCAG ✅
5. Se separo el codigo de javascript en un archivo script.js para mayor  organizacion ✅