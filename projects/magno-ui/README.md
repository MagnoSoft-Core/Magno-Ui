# Magno UI

Bienvenido a Magno UI, tu nueva librería de componentes `standalone` para Angular. Magno UI te proporciona un conjunto de componentes de alta calidad, listos para usar y fáciles de integrar, permitiéndote construir interfaces de usuario modernas y elegantes con un esfuerzo mínimo. Al ser `standalone`, cada componente se puede importar y utilizar de forma independiente, ofreciendo la máxima flexibilidad para tus proyectos de Angular.

## Instalación

Para instalar Magno UI, ejecuta el siguiente comando en tu terminal:

```bash
npm install magno-ui
```

## Uso

Todos los componentes de Magno UI son `standalone`. Para usarlos, impórtalos directamente en el array `imports` de tu componente:

```typescript
import { Component } from "@angular/core";
import { MagnoNavbar } from "magno-ui";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [MagnoNavbar],
  template: ` <magno-navbar [logoUrl]="'/logo.png'" [titleLogo]="'Mi App'" [subTitleLogo]="'Una aplicación increíble'"></magno-navbar> `,
})
export class ExampleComponent {}
```

Luego, puedes usar el componente en tus plantillas HTML como se muestra en el `template`.

## Componentes

Magno UI incluye los siguientes componentes:

- [`MagnoDrawer`](./src/lib/components/magno-drawer/README.md)
- [`MagnoGrid`](./src/lib/components/magno-grid/README.md)
- [`MagnoNavbar`](./src/lib/components/magno-navbar/README.md)
- [`MagnoSidebar`](./src/lib/components/magno-sidebar/README.md)
- [`MagnoSidebarItem`](./src/lib/components/magno-sidebar-item/README.md)
<!-- - [`MagnoSofphone`](./src/lib/components/magno-sofphone/README.md)
- [`MagnoLayoutContainer`](./src/lib/layouts/magno-layout-container/README.md) -->

## Desarrollo

Para construir la librería en modo de desarrollo, ejecuta:

```bash
ng build magno-ui
```

Para construir la librería para producción, ejecuta:

```bash
ng build magno-ui --configuration production
```
