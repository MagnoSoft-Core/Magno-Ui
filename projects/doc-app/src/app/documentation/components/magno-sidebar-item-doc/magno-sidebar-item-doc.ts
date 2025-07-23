import { Component } from '@angular/core';
import { DocPageComponent, DocProperty } from '../doc-page/doc-page';
import { MagnoSidebar, MagnoSidebarItem } from 'magno-ui';

@Component({
  selector: 'app-magno-sidebar-item-doc',
  standalone: true,
  imports: [DocPageComponent, MagnoSidebar, MagnoSidebarItem],
  templateUrl: './magno-sidebar-item-doc.html',
  styleUrl: './magno-sidebar-item-doc.css'
})
export class MagnoSidebarItemDocComponent {
  usage = `
<magno-sidebar-item
  [itemTitle]="'Home'"
  [iconPath]="'/assets/icons/home.svg'"
  [link]="'/home'"
></magno-sidebar-item>`;

  properties: DocProperty[] = [
    {
      name: 'itemDirection',
      type: "'row' | 'column'",
      default: "'row'",
      description: 'Dirección de los elementos del item.'
    },
    {
      name: 'iconPath',
      type: 'string',
      default: "''",
      description: 'Ruta del ícono.'
    },
    {
      name: 'iconWidth',
      type: 'number',
      default: '32',
      description: 'Ancho del ícono.'
    },
    {
      name: 'itemTitle',
      type: 'string',
      default: "''",
      description: 'Título del item.'
    },
    {
      name: 'titleClass',
      type: 'string',
      default: "'text-xs font-medium text-gray-600'",
      description: 'Clases CSS para el título.'
    },
    {
      name: 'link',
      type: 'string',
      default: "''",
      description: 'Ruta de navegación.'
    },
    {
      name: 'activeClass',
      type: 'string',
      default: "'bg-blue-100 text-blue-600 border-l-4 border-blue-600'",
      description: 'Clases CSS para el item activo.'
    },
    {
      name: 'customClass',
      type: 'string',
      default: "''",
      description: 'Clases CSS personalizadas para el item.'
    },
    {
      name: 'childrens',
      type: 'TMagnoSidebarItemChild[]',
      default: '[]',
      description: 'Hijos del item, para el submenú.'
    },
    {
      name: 'navToFirstChild',
      type: 'boolean',
      default: 'false',
      description: 'Navega al primer hijo si el item tiene hijos.'
    }
  ];
}