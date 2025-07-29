import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Test import from magno-ui
import {
  MagnoNavbar,
  MagnoSidebar,
  MagnoSidebarItem,
  TMagnoSidebarItemData,
} from '@magno-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MagnoSidebar, MagnoSidebarItem, MagnoNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Ejemplo de datos para un submenú
  userManagementChildren: TMagnoSidebarItemData[] = [
    { title: 'Ver todos', link: '/usuarios' },
    { title: 'Añadir nuevo sdfsdfsdf sfsdsdfdsf', link: '/users/new' },
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
