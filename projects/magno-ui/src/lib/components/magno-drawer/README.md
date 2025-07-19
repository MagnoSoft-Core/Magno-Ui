# Magno Drawer

Un componente de cajón deslizante que puede posicionarse en el lado izquierdo o derecho de la pantalla.

## Uso

```html
<magno-drawer [bindOpen]="isOpen" [size]="'md'" [position]="'right'" [showCloseButton]="true">
  <!-- Tu contenido aquí -->
</magno-drawer>
```

## Propiedades

| Propiedad         | Tipo                                  | Por defecto | Descripción                                                        |
| ----------------- | ------------------------------------- | ----------- | ------------------------------------------------------------------ |
| `bindOpen`        | `boolean`                             | `false`     | Controla si el cajón está abierto o cerrado (enlace bidireccional) |
| `size`            | `'2xs'\|'xs'\|'sm'\|'md'\|'lg'\|'xl'` | `'xs'`      | Tamaño del cajón                                                   |
| `position`        | `'left'\|'right'`                     | `'right`    | Posición del cajón en la pantalla                                  |
| `showCloseButton` | `boolean`                             | `true`      | Si mostrar el botón de cerrar                                      |

[Volver al README principal](../../../../README.md)
