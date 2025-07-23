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
  itemDirection = input<'row' | 'column'>('row');

  iconPath = input<string>('');
  iconWidth = input<number>(32);

  itemTitle = input<string>('');
  titleClass = input<string>('text-xs font-medium text-gray-600');

  link = input<string>('');
  activeClass = input<string>(
    'bg-blue-100 text-blue-600 border-l-4 border-blue-600'
  );
  customClass = input<string>('');

  childrens = input<TMagnoSidebarItemChild[]>([]);
  navToFirstChild = input<boolean>(false);

  private sidebar = inject(MagnoSidebar, { optional: true });

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

  onItemClick() {
    if (this.sidebar) {
      this.sidebar.setActiveChildren(this.childrens());
    }
  }
}
