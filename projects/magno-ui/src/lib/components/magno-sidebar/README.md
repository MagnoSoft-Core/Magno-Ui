# Magno Sidebar

Un componente de barra lateral (sidebar) que muestra una lista de ítems de navegación.

## Uso

```html
<magno-sidebar [showHeader]="true" [showFooter]="true" [items]="sidebarItems"></magno-sidebar>
```

## Propiedades

| Propiedad    | Tipo                     | Por defecto | Descripción                                    |
| ------------ | ------------------------ | ----------- | ---------------------------------------------- |
| `showHeader` | `boolean`                | `false`     | Muestra u oculta la cabecera del sidebar.      |
| `showFooter` | `boolean`                | `false`     | Muestra u oculta el pie de página del sidebar. |
| `items`      | `MagnoSidebarItemData[]` | `[]`        | La lista de ítems a mostrar en el sidebar.     |

## Interfaces

### IMagnoSidebarItem

```typescript
export type MagnoSidebarItemChild = {
  title: string;
  link: string;
};

export type MagnoSidebarItemData = {
  imagePath: string;
  imageAlt?: string;
  title: string;
  link: string;
  activeClass?: string;
  iconWidth?: number;
  customClass?: string;
  childrens: IMagnoSidebarItemChild[];
};
```

[Volver al README principal](../../../../README.md)
