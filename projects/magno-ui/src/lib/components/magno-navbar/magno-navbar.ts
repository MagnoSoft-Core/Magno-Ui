import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'magno-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './magno-navbar.html',
  styleUrl: './magno-navbar.css',
})
export class MagnoNavbar {
  isFixed = input<boolean>(false);
  imgLogo = input<string>('');
  titleLogo = input<string>('');
  subTitleLogo = input<string>('');
  routeLogo = input<string>('');
  clientOrganizationName = input<string>('');
  clientOrganizationLogo = input<string>('');

  menuTitle = input<string>('Comunicaciones');
  showMenuButton = input<boolean>(true);
}
