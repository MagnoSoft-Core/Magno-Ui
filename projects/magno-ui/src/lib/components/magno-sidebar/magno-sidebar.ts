import { Component, input, signal } from '@angular/core';
import type { TMagnoSidebarItemChild } from '../../types/magno-sidebar';

@Component({
  selector: 'magno-sidebar',
  imports: [],
  templateUrl: './magno-sidebar.html',
  styleUrl: './magno-sidebar.css',
  standalone: true,
})
export class MagnoSidebar {
  showHeader = input<boolean>(false);
  showFooter = input<boolean>(false);

  activeChildren = signal<TMagnoSidebarItemChild[] | null>(null);

  public setActiveChildren(children: TMagnoSidebarItemChild[] | undefined) {
    if (children && children.length > 0) {
      this.activeChildren.set(children);
    } else {
      this.activeChildren.set(null);
    }
  }
}
