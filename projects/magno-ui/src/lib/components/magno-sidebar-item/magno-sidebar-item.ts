import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { TMagnoSidebarItemData } from '../../types/magno-sidebar';
import { MagnoSidebar } from '../magno-sidebar/magno-sidebar';
import {
  MagnoTooltip,
  type TMagnoPlacement,
} from '../magno-tooltip/magno-tooltip';

@Component({
  selector: 'magno-sidebar-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MagnoTooltip],
  templateUrl: './magno-sidebar-item.html',
  styleUrl: './magno-sidebar-item.css',
})
export class MagnoSidebarItem {
  itemDirection = input<'row' | 'column'>('row');
  iconPath = input<string>();
  iconWidth = input<number>(32);
  itemTitle = input<string>();
  titleClass = input<string>('text-xs font-medium');
  tooltipText = input<string>();
  tooltipPosition = input<TMagnoPlacement>('right');
  link = input<string>();
  activeColor = input<string>('var(--magno-sidebar-item-active-bg)');
  activeBorder = input<boolean>(false);
  childrens = input<TMagnoSidebarItemData[]>([]);
  navToFirstChild = input<boolean>(false);

  private sidebar = inject(MagnoSidebar, { optional: true });
  private isActive = signal<boolean>(false);

  // *Si tiene hijos, el enlace final será el del primer hijo, siempre y cuando navToFirstChild sea true
  // *Si no tiene hijos, el enlace final será el del propio item
  finalLink = computed(() => {
    const children = this.childrens();
    return !children || children.length === 0
      ? this.link()
      : this.navToFirstChild()
      ? children[0].link
      : null;
  });

  itemDirectionClass = computed(() => {
    return this.itemDirection() === 'row' ? 'flex-row' : 'flex-col';
  });

  finalActiveColor = computed(() => {
    return this.isActive() ? this.activeColor() : null;
  });

  finalActiveBorder = computed(() => {});

  onItemClick() {
    if (this.sidebar) {
      this.sidebar.setActiveChildren(this.childrens());
    }
  }

  onIsActiveChange(isActive: boolean) {
    this.isActive.set(isActive);
  }
}
