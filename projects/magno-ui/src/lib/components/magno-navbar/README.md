# Magno Navbar

Un componente de barra de navegación responsive que incluye logo, título, subtítulo y área de organización cliente.

## Uso

```html
<magno-navbar
  [isFixed]="true"
  [imgLogo]="'assets/logo.png'"
  [titleLogo]="'Mi Aplicación'"
  [subTitleLogo]="'Versión 1.0'"
  [clientOrganizationName]="'Mi Empresa'"
  [clientOrganizationLogo]="'assets/client-logo.png'"
>
  <!-- Contenido del lado derecho -->
  <button class="px-4 py-2 bg-blue-500 text-white rounded">
    Botón
  </button>
</magno-navbar>
```

## Propiedades

| Propiedad                | Tipo      | Por defecto | Descripción                                                                     |
| ------------------------ | --------- | ----------- | ------------------------------------------------------------------------------- |
| `isFixed`                | `boolean` | `true`      | Determina si el navbar se fija en la parte superior (fixed) o se comporta como sticky |
| `imgLogo`                | `string`  | `''`        | URL de la imagen del logo principal                                             |
| `titleLogo`              | `string`  | `''`        | Título principal que aparece junto al logo                                      |
| `subTitleLogo`           | `string`  | `''`        | Subtítulo que aparece debajo del título principal                               |
| `clientOrganizationName` | `string`  | `''`        | Nombre de la organización cliente (opcional)                                   |
| `clientOrganizationLogo` | `string`  | `''`        | URL del logo de la organización cliente (opcional)                             |

## Slots

| Slot    | Descripción                                                              |
| ------- | ------------------------------------------------------------------------ |
| Default | Contenido que aparece en el lado derecho del navbar (botones, menús, etc.) |

[Volver al README principal](../../../../README.md)
