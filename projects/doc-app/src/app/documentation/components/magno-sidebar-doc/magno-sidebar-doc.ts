import { Component } from '@angular/core';
import { DocPageComponent, DocProperty, DocSlot } from '../doc-page/doc-page';
import { MagnoSidebar, MagnoSidebarItem } from 'magno-ui';

@Component({
  selector: 'app-magno-sidebar-doc',
  standalone: true,
  imports: [DocPageComponent, MagnoSidebar, MagnoSidebarItem],
  templateUrl: './magno-sidebar-doc.html',
  styleUrl: './magno-sidebar-doc.css'
})
export class MagnoSidebarDocComponent {
  usage = `
<magno-sidebar [showHeader]="true" [showFooter]="true">
  <magno-sidebar-item
    [itemTitle]="'Home'"
    [iconPath]="'/assets/icons/home.svg'"
    [link]="'/home'"
  ></magno-sidebar-item>
  <magno-sidebar-item
    [itemTitle]="'Settings'"
    [iconPath]="'/assets/icons/settings.svg'"
    [childrens]="[{ title: 'Profile', link: '/profile' }, { title: 'Account', link: '/account' }]"
  ></magno-sidebar-item>
  <div footer>
    <magno-sidebar-item
      [itemTitle]="'Logout'"
      [iconPath]="'/assets/icons/logout.svg'"
      [link]="'/logout'"
    ></magno-sidebar-item>
  </div>
</magno-sidebar>`;

  properties: DocProperty[] = [
    {
      name: 'showHeader',
      type: 'boolean',
      default: 'false',
      description: 'Muestra u oculta el header del sidebar.'
    },
    {
      name: 'showFooter',
      type: 'boolean',
      default: 'false',
      description: 'Muestra u oculta el footer del sidebar.'
    }
  ];

  slots: DocSlot[] = [
    {
      name: 'default',
      description: 'Contenido principal del sidebar, usualmente magno-sidebar-items.'
    },
    {
      name: 'footer',
      description: 'Contenido del footer del sidebar.'
    }
  ];
}
