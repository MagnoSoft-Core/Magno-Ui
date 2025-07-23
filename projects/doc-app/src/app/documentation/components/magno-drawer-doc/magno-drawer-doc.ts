import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MagnoDrawer } from 'magno-ui';
import { DocPageComponent, DocProperty } from '../doc-page/doc-page';

@Component({
  selector: 'app-magno-drawer-doc',
  standalone: true,
  imports: [MagnoDrawer, FormsModule, DocPageComponent],
  templateUrl: './magno-drawer-doc.html',
  styleUrl: './magno-drawer-doc.css',
})
export class MagnoDrawerDocComponent {
  isDrawerOpen = signal(false);
  selectedSize: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  selectedPosition: 'left' | 'right' = 'right';

  toggleDrawer() {
    this.isDrawerOpen.update((value) => !value);
  }

  drawerUsage = `
<magno-drawer
  [bindOpen]="isOpen"
  [size]="'md'"
  [position]="'right'"
  [showCloseButton]="true"
>
  <!-- Tu contenido aquí -->
</magno-drawer>`;

  drawerProperties: DocProperty[] = [
    {
      name: 'bindOpen',
      type: 'boolean',
      default: 'false',
      description: 'Controla si el cajón está abierto o cerrado (enlace bidireccional)',
    },
    {
      name: 'size',
      type: "'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
      default: "'sm'",
      description: 'Tamaño del cajón',
    },
    {
      name: 'position',
      type: "'left' | 'right'",
      default: "'left'",
      description: 'Posición del cajón en la pantalla',
    },
    {
      name: 'showCloseButton',
      type: 'boolean',
      default: 'true',
      description: 'Si mostrar el botón de cerrar',
    },
  ];
}