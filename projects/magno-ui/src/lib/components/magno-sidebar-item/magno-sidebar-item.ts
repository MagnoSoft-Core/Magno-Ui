import { Component, computed, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TMagnoSidebarItemChild } from '../../types/magno-sidebar';
import { MagnoSidebar } from '../magno-sidebar/magno-sidebar';
import { MagnoTooltip } from '../magno-tooltip/magno-tooltip';

@Component({
  selector: 'magno-sidebar-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MagnoTooltip],
  templateUrl: './magno-sidebar-item.html',
  styleUrl: './magno-sidebar-item.css',
})
export class MagnoSidebarItem {
  iconPath = input.required<string>();
  itemTitle = input<string>('');
  titleClass = input<string>('');
  link = input<string>('');
  activeClass = input<string>('active'); // Default active class
  childrens = input<TMagnoSidebarItemChild[]>();
  iconWidth = input<number>(32); // Default icon width
  customClass = input<string>('');

  private sidebar = inject(MagnoSidebar, { optional: true });

  // If the item has children, the main link should not navigate, but toggle the panel.
  // The first child's link can be used as a default navigation target if needed.
  finalLink = computed(() => {
    const children = this.childrens();
    return !children || children.length === 0 ? this.link() : null;
  });

  finalTitleClass = computed(() => {
    return this.titleClass().length
      ? this.titleClass()
      : 'text-xs font-medium text-gray-600';
  });

  onItemClick() {
    if (this.sidebar) {
      this.sidebar.setActiveChildren(this.childrens());
    }
  }
}
