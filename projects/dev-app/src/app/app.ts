import { Component, signal } from '@angular/core';
// Test import from magno-ui
import type { MagnoSidebarItemData } from '@magno-ui';
import { MagnoNavbar, MagnoSidebar } from '@magno-ui';

@Component({
  selector: 'app-root',
  imports: [MagnoSidebar, MagnoNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showHeader = signal(true);
  showFooter = signal(true);

  items = signal<MagnoSidebarItemData[]>([
    {
      imagePath: '/users.svg',
      title: 'Contactos',
      link: '#1',
      iconWidth: 40,
      childrens: [],
      customClass: '',
    },
    {
      imagePath: '/logo_mag.png',
      title: 'item 1',
      link: '#2',
      iconWidth: 30,
      childrens: [],
    },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#3',
    //   iconWidth: 30,
    //   childrens: [],
    // },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#4',
    //   iconWidth: 30,
    //   childrens: [],
    // },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#5',
    //   iconWidth: 30,
    //   childrens: [],
    // },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#6',
    //   iconWidth: 30,
    //   childrens: [],
    // },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#',
    //   iconWidth: 30,
    //   childrens: [],
    // },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#',
    //   iconWidth: 30,
    //   childrens: [],
    // },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#',
    //   iconWidth: 30,
    //   childrens: [],
    // },
    // {
    //   imagePath: '/logo_mag.png',
    //   title: 'item 1',
    //   link: '#',
    //   iconWidth: 30,
    //   childrens: [],
    // },
  ]);

  handleChange(event: Event) {
    console.log(event.target);
  }

  toogleShow() {
    this.showHeader.update((value) => !value);
    this.showFooter.update((value) => !value);
  }
}
