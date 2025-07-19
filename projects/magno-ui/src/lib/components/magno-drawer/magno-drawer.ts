import { NgClass } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { MagnoSize, MagnoXOrientation } from '../../types/shareds';

@Component({
  selector: 'magno-drawer',
  imports: [NgClass],
  templateUrl: './magno-drawer.html',
  styleUrl: './magno-drawer.css',
})
export class MagnoDrawer {
  showCloseButton = input<boolean>(true);
  size = input<MagnoSize>('sm');
  position = input<MagnoXOrientation>('left');

  bindOpen = model<boolean>(false);

  closeDrawer() {
    this.bindOpen.set(!this.bindOpen());
  }
}
