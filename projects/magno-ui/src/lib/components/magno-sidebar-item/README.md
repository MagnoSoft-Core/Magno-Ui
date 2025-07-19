# Magno Sidebar Item

Este componente representa un único ítem dentro de `magno-sidebar`.

## Uso

Este componente se usa internamente por `magno-sidebar` y no está diseñado para ser usado directamente.

## Propiedades

| Propiedad     | Tipo                       | Por defecto | Descripción                                    |
| ------------- | -------------------------- | ----------- | ---------------------------------------------- |
| `imagePath`   | `string`                   | `''`        | La ruta a la imagen o ícono del ítem.          |
| `imageAlt`    | `string`                   | `''`        | El texto alternativo para la imagen.           |
| `title`       | `string`                   | `''`        | El título del ítem.                            |
| `titleClass`  | `string`                   | `''`        | Clases CSS para el título.                     |
| `link`        | `string`                   | `''`        | El enlace de navegación para el ítem.          |
| `activeClass` | `string`                   | `''`        | Clases CSS para el estado activo del ítem.     |
| `childrens`   | `IMagnoSidebarItemChild[]` | `[]`        | La lista de ítems hijos.                       |
| `iconWidth`   | `number`                   |             | El ancho del ícono.                            |
| `customClass` | `string`                   | `''`        | Clases CSS personalizadas para el componente.  |

## Interfaces

### IMagnoSidebarItemChild

```typescript
export interface IMagnoSidebarItemChild {
  title: string;
  link: string;
}
```

[Volver al README principal](../../../../README.md)
