import { Component, signal } from '@angular/core';
import { MagnoNavbar } from 'magno-ui';

@Component({
  selector: 'app-magno-navbar-doc',
  imports: [MagnoNavbar],
  templateUrl: './magno-navbar-doc.html',
  styleUrl: './magno-navbar-doc.css',
})
export class MagnoNavbarDocComponent {
  isFixedValue = signal(false);
  showClientInfo = signal(true);

  // Propiedades para el ejemplo
  logoUrl = '/logo_mag.png';
  titleLogo = 'Magno UI';
  subTitleLogo = 'Versión 1.0';
  clientOrgName = 'Sisma Corporation';
  clientLogoUrl = '/sismasalud.png';

  toggleFixed() {
    this.isFixedValue.update((value) => !value);
  }

  toggleClientInfo() {
    this.showClientInfo.update((value) => !value);
  }
}