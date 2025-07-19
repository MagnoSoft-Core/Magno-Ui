import { Component, input } from '@angular/core';

@Component({
  selector: 'magno-checkbox',
  imports: [],
  templateUrl: './magno-checkbox.html',
  styleUrl: './magno-checkbox.css',
})
export class MagnoCheckbox {
  checkId = input<string>('');
  checkValue = input<string>('');
  checked = input<boolean>(false);
  disabled = input<boolean>(false);
  required = input<boolean>(false);
}
