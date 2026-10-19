# React UI Library

Librería de componentes reutilizables desarrollada con **React, TypeScript y
Vite**, diseñada para proporcionar una base de interfaz consistente,
personalizable y mantenible para aplicaciones React.

## ✨ Características

- **React + TypeScript:** componentes reutilizables con tipado estático.
- **Vite:** servidor de desarrollo rápido y compilaciones optimizadas.
- **Gestión de temas:** configuración centralizada de temas y tokens de diseño.
- **Internacionalización (i18n):** soporte para múltiples idiomas.
- **ESLint:** validación automática de la calidad del código.
- **Prettier:** formato consistente del código.
- **Conventional Commits:** estandarización de los mensajes de commit.
- **Git Hooks:** ejecución automática de validaciones antes de confirmar
  cambios.
- **Distribución privada:** generación de paquetes instalables en formato
  `.tgz`.
- **GitHub Actions:** automatización de validaciones y generación de artefactos.

## 📋 Requisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 20 o superior, compatible con la configuración del proyecto.
- npm.
- Git.

## 🚀 Instalación

### Instalar desde un paquete local

Genera el paquete de la librería:

```bash
npm run package:lib
```

El archivo `.tgz` generado se almacena en el directorio `resources/`.

Instálalo en otra aplicación React:

```bash
npm install ../ruta-de-la-libreria/resources/react-ui-0.0.0.tgz
```

Reemplaza la ruta y el nombre del archivo por los valores reales generados por
el proyecto.

### Instalar desde un registro privado de npm

Si la librería se publica en GitHub Packages, configura el registro en el
archivo `.npmrc` del proyecto consumidor:

```ini
@tu-organizacion:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Instala la librería:

```bash
npm install @tu-organizacion/react-ui
```

Reemplaza el nombre de la organización y el paquete por los valores definidos en
`package.json`.

> Generar un archivo `.tgz` no publica automáticamente la librería en un
> registro. La publicación debe configurarse por separado.

Nunca guardes tokens de autenticación directamente en el repositorio.

## 🛠️ Configuración del entorno de desarrollo

Clona el repositorio e instala las dependencias:

```bash
git clone <url-del-repositorio>
cd starter-react-ui
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Genera la compilación:

```bash
npm run build
```

Previsualiza la compilación de producción, si el proyecto lo permite:

```bash
npm run preview
```

## 📦 Scripts disponibles

| Comando                | Descripción                                                      |
| ---------------------- | ---------------------------------------------------------------- |
| `npm run dev`          | Inicia el servidor de desarrollo de Vite.                        |
| `npm run build`        | Compila la aplicación o librería según la configuración de Vite. |
| `npm run preview`      | Previsualiza la compilación de producción.                       |
| `npm run lint`         | Ejecuta ESLint para validar el código.                           |
| `npm run format`       | Formatea los archivos con Prettier.                              |
| `npm run format:check` | Comprueba el formato sin modificar archivos.                     |
| `npm run package:lib`  | Ejecuta el proceso de empaquetado de la librería.                |
| `npm run prepare`      | Inicializa los Git Hooks configurados.                           |

Los comandos disponibles dependen de los scripts definidos en `package.json`.
Ajusta esta tabla según la configuración real del proyecto.

## 🎨 Gestión de temas

La librería permite centralizar la configuración visual mediante proveedores de
temas y definiciones reutilizables.

Sus responsabilidades pueden incluir:

- Definir paletas de colores y tokens de diseño.
- Aplicar un tema seleccionado a los componentes.
- Resolver el tema inicial de la aplicación.
- Persistir las preferencias del usuario cuando esté implementado.
- Incorporar nuevos temas sin duplicar la lógica de los componentes.

Ejemplo de uso, si la librería exporta un `ThemeProvider`:

```tsx
import { ThemeProvider } from "@tu-organizacion/react-ui";

export function App() {
  return (
    <ThemeProvider>
      <main>
        <h1>Mi aplicación</h1>
      </main>
    </ThemeProvider>
  );
}
```

Adapta el import y las propiedades según la API pública real de la librería.

## 🌍 Internacionalización

La librería puede proporcionar un mecanismo centralizado para gestionar
traducciones y múltiples idiomas.

Sus responsabilidades pueden incluir:

- Administrar catálogos de traducciones.
- Resolver el idioma inicial.
- Definir un idioma de respaldo.
- Exponer utilidades o hooks de traducción.
- Persistir la preferencia de idioma cuando esté implementado.

Ejemplo de uso, si la librería exporta un `TranslateProvider`:

```tsx
import { TranslateProvider } from "@tu-organizacion/react-ui";

export function App() {
  return (
    <TranslateProvider>
      <main>
        <h1>Mi aplicación</h1>
      </main>
    </TranslateProvider>
  );
}
```

Consulta la API real del proveedor para conocer los idiomas soportados, los
catálogos y las opciones de configuración.

## 🧹 Calidad del código

### ESLint

ESLint identifica posibles errores y verifica el cumplimiento de las reglas de
calidad del código.

```bash
npm run lint
```

### Prettier

Formatea los archivos:

```bash
npm run format
```

Comprueba el formato sin modificar archivos:

```bash
npm run format:check
```

En los flujos de integración continua se recomienda comprobar el formato sin
modificar archivos.

### TypeScript

TypeScript ayuda a detectar errores de tipos y mantener una API pública
predecible.

Si la configuración del proyecto lo permite, ejecuta:

```bash
npx tsc --noEmit
```

Si existen configuraciones de TypeScript separadas, valida las correspondientes
a la aplicación y a las herramientas de Node.js.

## 🪝 Conventional Commits

El proyecto utiliza Conventional Commits para estandarizar los mensajes de
commit.

### Formato

```text
tipo(alcance): descripción
```

### Ejemplos

```text
feat(theme): agregar soporte para temas
fix(i18n): corregir la inicialización del idioma
refactor(hooks): simplificar la lógica de temas
docs(readme): actualizar las instrucciones de instalación
test(theme): agregar pruebas del proveedor
build(package): configurar el empaquetado
ci(actions): agregar flujo de despliegue
```

### Tipos de commit

| Tipo       | Uso                                                |
| ---------- | -------------------------------------------------- |
| `feat`     | Nuevas funcionalidades.                            |
| `fix`      | Correcciones de errores.                           |
| `refactor` | Reestructuración del código.                       |
| `test`     | Pruebas automatizadas.                             |
| `docs`     | Documentación.                                     |
| `style`    | Cambios de formato o estilo sin alterar la lógica. |
| `build`    | Compilación y dependencias.                        |
| `ci`       | Configuración de CI/CD.                            |
| `chore`    | Tareas de mantenimiento.                           |

### Git Hooks automatizados

Cuando los hooks locales están configurados, antes de crear un commit se
ejecutan:

1. **ESLint:** valida la calidad del código.
2. **Commitlint:** verifica que el mensaje cumpla con Conventional Commits.

Si falla ESLint o el mensaje no cumple la convención, Git rechaza el commit.

Si los hooks se generan localmente y están excluidos del control de versiones,
el repositorio debe incluir el script de configuración y ejecutarlo
automáticamente durante la instalación de dependencias.

## 📦 Empaquetado de la librería

Genera el paquete instalable:

```bash
npm run package:lib
```

El proceso de empaquetado debe:

1. Ejecutar las validaciones de formato y calidad configuradas.
2. Generar la compilación distribuible de la librería.
3. Empaquetar los archivos generados.
4. Guardar el archivo `.tgz` en `resources/`.

Asegúrate de incluir el JavaScript compilado, las declaraciones de TypeScript,
los recursos necesarios y los metadatos del paquete.

Los campos `main`, `module`, `types` y `exports` de `package.json` deben apuntar
a los archivos generados correspondientes, cuando aplique.

## ⚙️ GitHub Actions

GitHub Actions permite automatizar las validaciones y la distribución de la
librería.

### Validación de código y formato

Se ejecuta en los pushes y pull requests dirigidos a las ramas configuradas.

Las validaciones pueden incluir:

- Instalación de dependencias.
- Ejecución de ESLint.
- Comprobación del formato con Prettier.

### Despliegue del paquete

El workflow de despliegue genera el paquete `.tgz` y lo publica como artefacto
descargable de la ejecución correspondiente de GitHub Actions.

Puedes descargarlo desde la sección **Actions** del repositorio.

> Subir un artefacto a GitHub Actions no equivale a publicar la librería en npm
> o GitHub Packages.

## 🔐 Distribución privada

Para distribuir la librería de forma privada:

- Guarda los tokens en secretos de GitHub Actions o variables de entorno.
- Nunca incluyas credenciales en el código fuente.
- Otorga únicamente los permisos necesarios.
- Configura correctamente el registro y el alcance del paquete.
- Publica versiones identificables.
- Mantén un historial de cambios cuando corresponda.

## 📁 Estructura del proyecto

La estructura puede organizarse de la siguiente manera:

```text
starter-react-ui/
├── .github/
│   └── workflows/
├── scripts/
│   ├── package-library.mjs
├── src/
│ │──libs/
│    ├── components/
│    ├── domain/
│    ├── application/
│    ├── infrastructure/
│    ├── presentation/
│    └── index.ts
├── resources/
├── .gitignore
├── commitlint.config.cjs
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

La estructura definitiva dependerá de la arquitectura implementada en el
repositorio.

## 🤝 Guía de contribución

1. Crea una rama para la funcionalidad o corrección.
2. Realiza cambios pequeños, claros y mantenibles.
3. Ejecuta ESLint, las comprobaciones de formato y las pruebas disponibles.
4. Utiliza mensajes de commit que cumplan con Conventional Commits.
5. Abre un pull request hacia la rama de desarrollo correspondiente.

## 🔒 Licencia y propiedad intelectual

**Software propietario. Todos los derechos reservados.**

Esta librería es propiedad privada de sus titulares. Su código fuente,
componentes, diseños, documentación y demás materiales están protegidos por las
leyes aplicables de propiedad intelectual.

Queda prohibido, sin autorización previa y por escrito del titular:

- Copiar o redistribuir el código fuente o los paquetes compilados.
- Publicar, sublicenciar o comercializar la librería a terceros.
- Modificar o crear obras derivadas para su distribución externa.
- Compartir credenciales, archivos privados o acceso al repositorio.
- Utilizar la librería fuera del alcance de la autorización concedida.

El acceso al repositorio o la posibilidad de instalar el paquete no implica la
transferencia de propiedad ni la concesión de derechos de redistribución.

Cualquier permiso de uso debe ser autorizado expresamente por el titular y
limitarse a las condiciones acordadas.

Copyright © 2026. Todos los derechos reservados.
