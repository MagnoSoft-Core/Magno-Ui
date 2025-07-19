import { Component, input } from '@angular/core';
import type { MagnoSidebarItemData } from '../../types/magno-sidebar';
import { MagnoSidebarItem } from '../magno-sidebar-item/magno-sidebar-item';

export type SidebarVariant = 'default' | 'compact' | 'floating';
export type SidebarTheme = 'light' | 'dark' | 'auto';

@Component({
  selector: 'magno-sidebar',
  imports: [MagnoSidebarItem],
  templateUrl: './magno-sidebar.html',
  styleUrl: './magno-sidebar.css',
  standalone: true,
})
export class MagnoSidebar {
  showHeader = input<boolean>(false);
  showFooter = input<boolean>(false);
  items = input<MagnoSidebarItemData[]>([]);
}
