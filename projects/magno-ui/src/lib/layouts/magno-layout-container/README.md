# Magno Layout Container

Un componente contenedor de diseño que organiza el contenido principal y una barra lateral.

## Uso

```html
<magno-layout-container
  [showSidebar]="isSidebarVisible"
  [sidebarWidth]="300"
  [direction]="'ltr'"
  customClass="my-custom-class"
>
  <!-- Contenido del sidebar -->
  <div class="sidebar-content">
    ...
  </div>

  <!-- Contenido principal -->
  <div class="main-content">
    ...
  </div>
</magno-layout-container>
```

## Propiedades

| Propiedad      | Tipo                    | Por defecto | Descripción                                          |
| -------------- | ----------------------- | ----------- | ---------------------------------------------------- |
| `showSidebar`  | `boolean`               | `false`     | Controla si la barra lateral es visible o no.        |
| `sidebarWidth` | `number`                | `280`       | El ancho de la barra lateral en píxeles.             |
| `direction`    | `'ltr' \| 'rtl'`         | `'ltr'`     | La dirección del diseño (de izquierda a derecha o de derecha a izquierda). |
| `customClass`  | `string`                | `''`        | Clases CSS personalizadas para el contenedor.        |

[Volver al README principal](../../../../README.md)
