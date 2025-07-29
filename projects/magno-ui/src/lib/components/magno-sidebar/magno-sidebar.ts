import { NgClass } from '@angular/common';
import {
  Component,
  forwardRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import type { TMagnoSidebarItemData } from '../../types/magno-sidebar';
import { MagnoSidebarItem } from '../magno-sidebar-item/magno-sidebar-item';

@Component({
  selector: 'magno-sidebar',
  imports: [forwardRef(() => MagnoSidebarItem), NgClass],
  templateUrl: './magno-sidebar.html',
  styleUrl: './magno-sidebar.css',
  standalone: true,
})
export class MagnoSidebar implements OnInit, OnDestroy {
  showHeader = input<boolean>(false);
  showFooter = input<boolean>(false);

  activeChildren = signal<TMagnoSidebarItemData[] | null>(null);
  // titleChildrenPanel = input<string>('');

  private router = inject(Router);
  private routerSubscription!: Subscription;

  ngOnInit(): void {
    console.log(this.activeChildren());
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        const active = this.activeChildren();
        if (active) {
          const isAnyChildActive = active.some((child) =>
            this.router.isActive(child.link, {
              paths: 'subset',
              queryParams: 'subset',
              fragment: 'ignored',
              matrixParams: 'ignored',
            })
          );
          if (!isAnyChildActive) {
            this.activeChildren.set(null);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  public setActiveChildren(children: TMagnoSidebarItemData[] | undefined) {
    if (children && children.length > 0) {
      this.activeChildren.set(children);
    } else {
      this.activeChildren.set(null);
    }
  }
}
