import { Component, signal } from '@angular/core';
// Test import from magno-ui
import {
  MagnoNavbar,
  MagnoSidebar,
  MagnoSidebarItem,
  MagnoTooltip,
  TMagnoSidebarItemChild,
} from '@magno-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MagnoSidebar, MagnoSidebarItem, MagnoNavbar, MagnoTooltip],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Ejemplo de datos para un submenú
  userManagementChildren: TMagnoSidebarItemChild[] = [
    { title: 'Ver todos', link: '/users/list' },
    { title: 'Añadir nuevo', link: '/users/new' },
    { title: 'Roles', link: '/users/roles' },
  ];

  // Señal para el ejemplo del botón de toggle
  showHeader = signal(true);
  showFooter = signal(true);

  toogleShow() {
    this.showHeader.update((value) => !value);
    this.showFooter.update((value) => !value);
  }
}
