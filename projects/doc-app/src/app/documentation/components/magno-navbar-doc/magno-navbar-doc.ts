import { Component, signal } from '@angular/core';
import { MagnoNavbar } from 'magno-ui';
import { DocPageComponent, DocProperty, DocSlot } from '../doc-page/doc-page';

@Component({
  selector: 'app-magno-navbar-doc',
  standalone: true,
  imports: [MagnoNavbar, DocPageComponent],
  templateUrl: './magno-navbar-doc.html',
  styleUrl: './magno-navbar-doc.css',
})
export class MagnoNavbarDocComponent {
  isFixedValue = signal(false);
  showClientInfo = signal(true);

  // Propiedades para el ejemplo
  logoUrl = '/logo_mag.png';
  titleLogo = 'Magno UI';
  subTitleLogo = 'Versión 1.0';
  clientOrgName = 'Sisma Corporation';
  clientLogoUrl = '/sismasalud.png';

  toggleFixed() {
    this.isFixedValue.update((value) => !value);
  }

  toggleClientInfo() {
    this.showClientInfo.update((value) => !value);
  }

  navbarUsage = `
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
</magno-navbar>`;

  navbarProperties: DocProperty[] = [
    {
      name: 'isFixed',
      type: 'boolean',
      default: 'true',
      description: 'Determina si el navbar se fija en la parte superior (fixed) o se comporta como sticky',
    },
    {
      name: 'imgLogo',
      type: 'string',
      default: "''",
      description: 'URL de la imagen del logo principal',
    },
    {
      name: 'titleLogo',
      type: 'string',
      default: "''",
      description: 'Título principal que aparece junto al logo',
    },
    {
      name: 'subTitleLogo',
      type: 'string',
      default: "''",
      description: 'Subtítulo que aparece debajo del título principal',
    },
    {
      name: 'clientOrganizationName',
      type: 'string',
      default: "''",
      description: 'Nombre de la organización cliente (opcional)',
    },
    {
      name: 'clientOrganizationLogo',
      type: 'string',
      default: "''",
      description: 'URL del logo de la organización cliente (opcional)',
    },
  ];

  navbarSlots: DocSlot[] = [
    {
      name: 'Default',
      description: 'Contenido que aparece en el lado derecho del navbar (botones, menús, etc.)',
    },
  ];
}
