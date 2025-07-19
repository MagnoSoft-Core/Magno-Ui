import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { MagnoSidebarItemChild } from '../../types/magno-sidebar';

@Component({
  selector: 'magno-sidebar-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './magno-sidebar-item.html',
  styleUrl: './magno-sidebar-item.css',
})
export class MagnoSidebarItem {
  imagePath = input('');
  imageAlt = input('');
  title = input('');
  titleClass = input<string>('');
  link = input('');
  activeClass = input<string>('');
  childrens = input<MagnoSidebarItemChild[]>([]);
  iconWidth = input<number>();
  customClass = input<string>('');

  finalLink = computed(() => {
    const childrens = this.childrens();
    if (childrens && childrens.length > 0) {
      return childrens[0].link;
    }
    return this.link();
  });

  finalTitleClass = computed(() => {
    return this.titleClass().length
      ? this.titleClass()
      : 'text-base font-medium text-gray-700';
  });
}
