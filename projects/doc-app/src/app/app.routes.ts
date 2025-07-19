import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'documentation',
    loadComponent: () =>
      import('./documentation/documentation').then(
        (m) => m.DocumentationComponent
      ),
    children: [
      {
        path: 'components',
        loadComponent: () =>
          import('./documentation/components/components').then(
            (m) => m.ComponentsComponent
          ),
        children: [
          {
            path: 'magno-drawer',
            loadComponent: () =>
              import(
                './documentation/components/magno-drawer-doc/magno-drawer-doc'
              ).then((m) => m.MagnoDrawerDocComponent),
          },
          {
            path: 'magno-navbar',
            loadComponent: () =>
              import(
                './documentation/components/magno-navbar-doc/magno-navbar-doc'
              ).then((m) => m.MagnoNavbarDocComponent),
          },
          {
            path: 'magno-sidebar',
            loadComponent: () =>
              import(
                './documentation/components/magno-sidebar-doc/magno-sidebar-doc'
              ).then((m) => m.MagnoSidebarDocComponent),
          },
          {
            path: 'magno-sidebar-item',
            loadComponent: () =>
              import(
                './documentation/components/magno-sidebar-item-doc/magno-sidebar-item-doc'
              ).then((m) => m.MagnoSidebarItemDocComponent),
          },
          {
            path: 'magno-sofphone',
            loadComponent: () =>
              import(
                './documentation/components/magno-sofphone-doc/magno-sofphone-doc'
              ).then((m) => m.MagnoSofphoneDocComponent),
          },
          {
            path: 'magno-button',
            loadComponent: () =>
              import(
                './documentation/components/magno-button-doc/magno-button-doc'
              ).then((m) => m.MagnoButtonDocComponent),
          },
          {
            path: 'magno-checkbox',
            loadComponent: () =>
              import(
                './documentation/components/magno-checkbox-doc/magno-checkbox-doc'
              ).then((m) => m.MagnoCheckboxDocComponent),
          },
          {
            path: 'magno-grid',
            loadComponent: () =>
              import(
                './documentation/components/magno-grid-doc/magno-grid-doc'
              ).then((m) => m.MagnoGridDocComponent),
          },
          {
            path: 'magno-input-text',
            loadComponent: () =>
              import(
                './documentation/components/magno-input-text-doc/magno-input-text-doc'
              ).then((m) => m.MagnoInputTextDocComponent),
          },
          {
            path: 'magno-input-textarea',
            loadComponent: () =>
              import(
                './documentation/components/magno-input-textarea-doc/magno-input-textarea-doc'
              ).then((m) => m.MagnoInputTextareaDocComponent),
          },
          {
            path: 'magno-radio',
            loadComponent: () =>
              import(
                './documentation/components/magno-radio-doc/magno-radio-doc'
              ).then((m) => m.MagnoRadioDocComponent),
          },
          {
            path: 'magno-radio-group',
            loadComponent: () =>
              import(
                './documentation/components/magno-radio-group-doc/magno-radio-group-doc'
              ).then((m) => m.MagnoRadioGroupDocComponent),
          },
          { path: '', redirectTo: 'magno-drawer', pathMatch: 'full' },
        ],
      },
      {
        path: 'layouts',
        loadComponent: () =>
          import('./documentation/layouts/layouts').then(
            (m) => m.LayoutsComponent
          ),
        children: [
          {
            path: 'magno-layout-container',
            loadComponent: () =>
              import(
                './documentation/layouts/magno-layout-container-doc/magno-layout-container-doc'
              ).then((m) => m.MagnoLayoutContainerDocComponent),
          },
          { path: '', redirectTo: 'container-layout', pathMatch: 'full' },
        ],
      },
      { path: '', redirectTo: 'components', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'documentation', pathMatch: 'full' },
];