import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, input } from '@angular/core';

export type LayoutDirection = 'ltr' | 'rtl';

@Component({
  selector: 'magno-layout-container',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './magno-layout-container.html',
  styleUrl: './magno-layout-container.css',
})
export class MagnoLayoutContainer {
  // --- Entradas (Inputs) ---

  /** Controls whether the sidebar is visible or hidden */
  showSidebar = input<boolean>(true);

  /** Width of the sidebar in pixels */
  sidebarWidth = input<number>(280);

  direction = input<LayoutDirection>('ltr');

  /** Additional CSS classes to apply to the container */
  customClass = input<string>('');

  // --- Señales Computadas para la Lógica ---

  /**
   * Calcula las clases para el contenedor principal.
   * Combina la dirección (ltr/rtl) con cualquier clase personalizada.
   */
  mainClasses = computed(() => ({
    [this.customClass()]: !!this.customClass(), // Añade la clase personalizada si existe
    'flex-row': this.direction() === 'ltr',
    'flex-row-reverse': this.direction() === 'rtl',
  }));

  /**
   * Calcula los estilos dinámicos para el sidebar.
   * Controla el ancho, la opacidad y los eventos del puntero.
   */
  sidebarStyles = computed(() => {
    const isVisible = this.showSidebar();
    return {
      'width.px': isVisible ? this.sidebarWidth() : 0,
      opacity: isVisible ? 1 : 0,
      'pointer-events': isVisible ? 'auto' : 'none',
    };
  });

  /**
   * Calcula las clases de transformación para el sidebar.
   * Controla el efecto de "deslizamiento" para ocultarlo.
   */
  sidebarClasses = computed(() => {
    const isHidden = !this.showSidebar();
    return {
      '-translate-x-full': isHidden && this.direction() === 'ltr',
      'translate-x-full': isHidden && this.direction() === 'rtl',
    };
  });
}
