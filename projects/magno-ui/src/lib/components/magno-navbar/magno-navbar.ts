import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'magno-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './magno-navbar.html',
  styleUrl: './magno-navbar.css',
})
export class MagnoNavbar {
  isFixed = input<boolean>(false);
  imgLogo = input<string>('');
  titleLogo = input<string>('');
  subTitleLogo = input<string>('');
  clientOrganizationName = input<string>('');
  clientOrganizationLogo = input<string>('');
}
