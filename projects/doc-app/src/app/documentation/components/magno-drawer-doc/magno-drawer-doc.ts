import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MagnoDrawer } from 'magno-ui';

@Component({
  selector: 'app-magno-drawer-doc',
  imports: [MagnoDrawer, FormsModule],
  templateUrl: './magno-drawer-doc.html',
  styleUrl: './magno-drawer-doc.css'
})
export class MagnoDrawerDocComponent {
  isDrawerOpen = signal(false);
  selectedSize: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  selectedPosition: 'left' | 'right' = 'right';

  toggleDrawer() {
    this.isDrawerOpen.update(value => !value);
  }
}