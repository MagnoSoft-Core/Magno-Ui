import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-documentation',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './documentation.html',
  styleUrl: './documentation.css',
})
export class DocumentationComponent {
  componentsExpanded = signal(true);
  layoutsExpanded = signal(false);

  toggleComponents() {
    this.componentsExpanded.update((value) => !value);
  }

  toggleLayouts() {
    this.layoutsExpanded.update((value) => !value);
  }
}
