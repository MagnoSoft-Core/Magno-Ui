# Magno UI Workspace

Este monorepo contiene todo el ecosistema de la librería de componentes Magno UI para Angular.

## Descripción General de Proyectos

El workspace está organizado en los siguientes proyectos principales:

- **`magno-ui`**: Es la librería de componentes de Angular. Contiene todos los componentes `standalone` reutilizables, listos para ser importados en cualquier proyecto de Angular.
- **`doc-app`**: Una aplicación web dedicada a la documentación interactiva de los componentes de `magno-ui`. Permite visualizar los componentes en acción y ver ejemplos de uso.
- **`dev-app`**: Una aplicación de desarrollo utilizada como un "sandbox" o entorno de pruebas para desarrollar y experimentar con los componentes de `magno-ui` de forma aislada.

## Primeros Pasos

A continuación se detallan los pasos para configurar el entorno de desarrollo.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

- **Git**: Para clonar el repositorio.
- **Node.js**: (Se recomienda la versión LTS más reciente).
- **Angular CLI**: La interfaz de línea de comandos de Angular. Si no la tienes, puedes instalarla globalmente con `npm install -g @angular/cli`.
- **pnpm**: Como gestor de paquetes. Puedes instalarlo con `npm install -g pnpm`.

### Instalación

1.  **Clona el repositorio**:

    ```bash
    git clone https://github.com/usuario/repo-aleatorio.git
    ```

2.  **Navega al directorio** del proyecto:

    ```bash
    cd Magno-UI-workspace
    ```

3.  **Instala las dependencias** con `pnpm`:
    ```bash
    pnpm install
    ```

## Cómo Levantar los Proyectos

Puedes levantar cada aplicación por separado usando Angular CLI. Los comandos deben ejecutarse desde la raíz del workspace.

Por defecto, Angular sirve las aplicaciones en el puerto `4200`. Si quieres especificar un puerto diferente, puedes usar el flag `--port`.

### Aplicación de Documentación (`doc-app`)

Para iniciar la aplicación de documentación en el puerto por defecto:

```bash
ng serve doc-app
```

Para iniciarla en un puerto específico (ej. 4201):

```bash
ng serve doc-app --port 4201
```

### Aplicación de Desarrollo (`dev-app`)

Para iniciar la aplicación de desarrollo en el puerto por defecto:

```bash
ng serve dev-app
```

Para iniciarla en un puerto específico (ej. 4202):

```bash
ng serve dev-app --port 4202
```

## Documentación de la Librería

Para más detalles sobre los componentes, sus propiedades y cómo usarlos, consulta la documentación específica de la librería en el siguiente enlace:

- **[Documentación de Magno UI](./projects/magno-ui/README.md)**
