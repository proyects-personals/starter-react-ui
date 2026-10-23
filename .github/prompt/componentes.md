Necesito que analices mi proyecto y desarrolles los componentes y organismos
necesarios para comenzar a construir mi librería de componentes reutilizables en
React y TypeScript, siguiendo la metodología **Atomic Design**.

## 1. Requisitos principales

1. **Atomic Design:** organiza los componentes en átomos, moléculas, organismos,
   templates y páginas, respetando las responsabilidades de cada nivel.
2. **Diseño responsive:** todos los componentes deben adaptarse correctamente a
   dispositivos móviles, tablets y escritorio, utilizando un enfoque
   mobile-first.
3. **Internacionalización (Translate):** integra el sistema de traducción
   existente en el proyecto para que todos los textos visibles puedan traducirse
   dinámicamente. Evita los textos estáticos que deban localizarse.
4. **Adaptabilidad y personalización:** permite configurar los componentes
   mediante props tipadas, habilitar o deshabilitar funcionalidades y
   personalizar su comportamiento sin modificar su implementación interna.
5. **Reutilización:** desarrolla componentes genéricos que puedan utilizarse en
   diferentes proyectos y permite combinarlos para construir componentes más
   complejos.
6. **TypeScript estricto:** utiliza tipos e interfaces explícitos, evita `any`,
   define los tipos de retorno cuando corresponda y elimina código innecesario.
7. **Arquitectura mantenible:** respeta la estructura y los alias existentes del
   proyecto, separa las responsabilidades y evita dependencias circulares.
8. **Accesibilidad:** implementa atributos semánticos, navegación mediante
   teclado, estados de foco y atributos ARIA cuando sean necesarios.
9. **Estilos adaptables:** utiliza el sistema de estilos y las tecnologías ya
   configuradas en el proyecto, evitando duplicaciones y permitiendo
   personalizar la apariencia.
10. **Documentación:** incorpora comentarios JSDoc siguiendo las convenciones
    existentes e incluye ejemplos de uso de los componentes.
11. **Pruebas unitarias:** implementa pruebas unitarias para todos los
    componentes, hooks, utilidades y comportamientos relevantes que se
    desarrollen. Utiliza las herramientas de testing existentes en el proyecto;
    si no existen, identifica e incorpora las dependencias apropiadas.

## 2. Organismos y componentes iniciales

Comienza identificando e implementando los elementos necesarios para disponer de
una base funcional y reutilizable:

- **Header:** encabezado genérico que pueda personalizarse mediante composición
  de componentes.
- **Logo:** componente reutilizable que permita configurar la imagen, el texto
  alternativo, las dimensiones y el enlace.
- **Navegación:** menú adaptable a dispositivos móviles y escritorio, con
  elementos configurables y traducciones.
- **Botón:** componente reutilizable con variantes visuales, tamaños, estados y
  accesibilidad.
- **Icono:** componente adaptable al sistema de iconografía utilizado en el
  proyecto.
- **Contenedor:** componente para controlar el ancho, la distribución y el
  espaciado del contenido.
- **Menú responsive:** componente que gestione la navegación en pantallas
  pequeñas y grandes.
- **Elementos de composición:** componentes auxiliares que permitan construir
  organismos personalizados sin duplicar código.

Organiza cada elemento en el nivel correspondiente de Atomic Design, evitando
clasificaciones arbitrarias y manteniendo una estructura coherente.

## 3. Requisitos específicos del Header

Desarrolla dos alternativas:

### Header genérico

Implementa un encabezado reutilizable que incorpore las funcionalidades comunes
y permita configurar su contenido mediante props tipadas.

Debe permitir:

- Mostrar u ocultar el logo.
- Mostrar u ocultar la navegación.
- Mostrar u ocultar el selector de tema existente.
- Mostrar u ocultar el selector de idioma existente.
- Personalizar las acciones y los elementos adicionales.
- Configurar su comportamiento responsive.
- Integrar correctamente el sistema de traducción.
- Personalizar su apariencia mediante las opciones admitidas por la librería.

### Header personalizado

Implementa una alternativa basada en composición que permita combinar el logo,
la navegación, el selector de tema, el selector de idioma y otros componentes
según las necesidades de cada proyecto.

Debe permitir reutilizar los componentes existentes sin duplicar su lógica ni
introducir dependencias innecesarias.

Ambas alternativas deben compartir los componentes y las utilidades comunes
siempre que sea apropiado.

## 4. Requisitos de las pruebas unitarias

**Las pruebas unitarias son obligatorias y forman parte de la implementación, no
son una tarea opcional o futura.**

### Cobertura funcional

Desarrolla pruebas para comprobar:

- El renderizado correcto de cada componente.
- Los valores predeterminados de sus props.
- El comportamiento de las variantes y los estados.
- La activación y desactivación de funcionalidades opcionales.
- La interacción con botones, enlaces, menús y controles.
- La apertura y el cierre del menú responsive.
- La navegación mediante teclado cuando corresponda.
- La integración con los proveedores de traducción y temas.
- La actualización de los textos al cambiar el idioma.
- El comportamiento de los componentes cuando faltan props opcionales.
- La ejecución de callbacks y eventos.
- El cumplimiento de los atributos de accesibilidad relevantes.

### Pruebas específicas del Header

Comprueba, como mínimo:

1. Que el Header genérico se renderice correctamente con su configuración
   predeterminada.
2. Que el logo pueda mostrarse u ocultarse independientemente.
3. Que la navegación pueda mostrarse u ocultarse independientemente.
4. Que el selector de tema pueda mostrarse u ocultarse independientemente.
5. Que el selector de idioma pueda mostrarse u ocultarse independientemente.
6. Que los elementos personalizados se rendericen correctamente.
7. Que el Header personalizado permita combinar componentes mediante
   composición.
8. Que las traducciones funcionen correctamente.
9. Que el menú móvil responda a las interacciones previstas.
10. Que los elementos interactivos sean accesibles mediante teclado.

### Herramientas y calidad

- Reutiliza el framework de pruebas existente.
- Si el proyecto no tiene herramientas de testing, evalúa Vitest y React Testing
  Library por su compatibilidad con React, TypeScript y Vite.
- Utiliza `userEvent` para simular interacciones reales cuando corresponda.
- Evita pruebas que dependan exclusivamente de la implementación interna del
  componente.
- Utiliza mocks únicamente cuando sean necesarios para aislar dependencias.
- No introduzcas `any` en los archivos de prueba.
- Mantén los tipos estrictos y evita código duplicado.
- Ejecuta las pruebas y corrige los errores encontrados antes de finalizar.
- Configura o reutiliza los comandos necesarios para ejecutar las pruebas desde
  el proyecto.
- Si existe una herramienta de cobertura, utilízala para identificar
  comportamientos importantes que no estén probados.

Incluye las pruebas junto a los componentes o en una estructura de directorios
de pruebas coherente con las convenciones existentes.

No inventes resultados: informa qué pruebas se ejecutaron, cuáles pasaron y
cuáles quedaron pendientes.

## 5. Forma de trabajo

Sigue este orden:

1. **Analiza el proyecto:** revisa la estructura de carpetas, las dependencias,
   los alias, los proveedores de contexto, el sistema Translate, el sistema de
   temas, los estilos y las herramientas de pruebas existentes.
2. **Identifica las funcionalidades existentes:** reutiliza los componentes,
   hooks y utilidades disponibles en lugar de crear implementaciones duplicadas.
3. **Define la arquitectura:** propone una estructura de carpetas coherente con
   Atomic Design y la arquitectura actual de la librería.
4. **Implementa los componentes:** desarrolla todos los archivos necesarios,
   incluidos sus tipos, interfaces, hooks, utilidades y estilos.
5. **Implementa las pruebas unitarias:** crea los archivos de prueba
   correspondientes a cada componente y funcionalidad relevante.
6. **Integra las exportaciones:** actualiza los archivos `index.ts` y los puntos
   de entrada necesarios para facilitar el consumo de los componentes desde la
   librería.
7. **Valida la implementación:** ejecuta las pruebas unitarias, el análisis
   estático, ESLint y TypeScript según las herramientas configuradas en el
   proyecto.
8. **Corrige los problemas:** resuelve los errores encontrados sin deshabilitar
   reglas de calidad ni introducir soluciones temporales innecesarias.
9. **Documenta el resultado:** proporciona la estructura final, el código
   completo de cada archivo nuevo o modificado y ejemplos de uso.

## 6. Restricciones de implementación

- No reemplaces los proveedores de traducción o temas existentes sin una
  justificación técnica.
- No dupliques funcionalidades que ya estén implementadas.
- No introduzcas dependencias innecesarias.
- No utilices `any`.
- No desactives reglas de ESLint para evitar corregir errores.
- No dejes componentes, hooks o pruebas incompletos.
- No modifiques funcionalidades ajenas a este objetivo.
- No afirmes que las pruebas pasan sin haberlas ejecutado.
- Respeta las convenciones de nombres, los alias y la organización actual del
  proyecto.
- Prioriza componentes pequeños, cohesivos y fáciles de mantener.

## 7. Resultado esperado

Quiero disponer de una base sólida para mi librería de componentes React y
TypeScript, con:

- Una estructura coherente basada en Atomic Design.
- Átomos, moléculas y organismos reutilizables.
- Un Header genérico y otro personalizable mediante composición.
- Diseño responsive y enfoque mobile-first.
- Internacionalización integrada con el sistema Translate existente.
- Integración con el sistema de temas existente.
- Props estrictamente tipadas y funcionalidades configurables.
- Accesibilidad y documentación.
- Pruebas unitarias para todos los componentes y funcionalidades relevantes.
- Exportaciones listas para consumir los componentes desde la librería.
- Comandos para ejecutar las pruebas y validar la calidad del código.

**Importante:** analiza primero el proyecto real antes de implementar. Entrega
todos los archivos completos que deban crearse o modificarse, con sus
respectivas rutas, y verifica la implementación con las herramientas
disponibles.
