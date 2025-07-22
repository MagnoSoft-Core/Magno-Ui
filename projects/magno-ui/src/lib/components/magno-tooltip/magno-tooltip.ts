import {
  ConnectedPosition,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  signal,
} from '@angular/core';

export type TMagnoPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right';

const POSITION_MAP: { [key in TMagnoPlacement]: ConnectedPosition } = {
  top: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
    offsetY: -8,
  },
  bottom: {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
    offsetY: 8,
  },
  left: {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
    offsetX: -8,
  },
  right: {
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
    offsetX: 8,
  },
  'top-left': {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
    offsetY: -8,
  },
  'top-right': {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
    offsetY: -8,
  },
  'bottom-left': {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    offsetY: 8,
  },
  'bottom-right': {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
    offsetY: 8,
  },
};

@Component({
  selector: 'magno-tooltip-component',
  templateUrl: './magno-tooltip.html',
  styleUrl: './magno-tooltip.css',
  standalone: true,
})
export class _MagnoTooltipComponent {
  text = signal<string>('');
}

@Directive({
  selector: '[magnoTooltip]',
  standalone: true,
})
export class MagnoTooltip implements OnDestroy {
  magnoTooltip = input<string>('');
  tootipPlacement = input<TMagnoPlacement>('right');

  private overlayRef: OverlayRef | null = null;

  private overlay = inject(Overlay);
  private positionBuilder = inject(OverlayPositionBuilder);
  private elementRef = inject(ElementRef);

  @HostListener('mouseenter')
  show() {
    if (this.overlayRef) {
      return;
    }

    // Construir la estrategia de posición dinámica
    const preferredPosition = POSITION_MAP[this.tootipPlacement()];
    const fallbackPositions = Object.values(POSITION_MAP).filter(
      (pos) => pos !== preferredPosition
    );

    const positionStrategy = this.positionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([preferredPosition, ...fallbackPositions]);

    this.overlayRef = this.overlay.create({ positionStrategy });
    const tooltipPortal = new ComponentPortal(_MagnoTooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.text.set(this.magnoTooltip());
  }

  @HostListener('mouseleave')
  hide() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  ngOnDestroy() {
    this.hide();
  }
}
