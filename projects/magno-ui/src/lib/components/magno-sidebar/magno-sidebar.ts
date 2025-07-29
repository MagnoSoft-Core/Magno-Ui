import { NgClass } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  QueryList,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, startWith, Subscription } from 'rxjs';
import type { TMagnoSidebarItemData } from '../../types/magno-sidebar';
import { MagnoSidebarItem } from '../magno-sidebar-item/magno-sidebar-item';

@Component({
  selector: 'magno-sidebar',
  imports: [forwardRef(() => MagnoSidebarItem), NgClass],
  templateUrl: './magno-sidebar.html',
  styleUrl: './magno-sidebar.css',
  standalone: true,
})
export class MagnoSidebar implements AfterContentInit, OnDestroy {
  @ContentChildren(MagnoSidebarItem) items!: QueryList<MagnoSidebarItem>;

  showHeader = input<boolean>(false);
  showFooter = input<boolean>(false);

  activeChildren = signal<TMagnoSidebarItemData[] | null>(null);

  private router = inject(Router);
  private routerSubscription!: Subscription;

  ngAfterContentInit(): void {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        startWith(null) // Para que se ejecute al inicio
      )
      .subscribe(() => {
        this.updateActiveChildren();
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  private updateActiveChildren(): void {
    let foundActive = false;
    if (this.items) {
      for (const item of this.items) {
        const children = item.childrens();
        if (children && children.length > 0) {
          const isAnyChildActive = children.some((child) =>
            this.router.isActive(child.link, {
              paths: 'exact',
              queryParams: 'exact',
              fragment: 'ignored',
              matrixParams: 'ignored',
            })
          );
          if (isAnyChildActive) {
            this.activeChildren.set(children);
            foundActive = true;
            break;
          }
        }
      }
    }

    if (!foundActive) {
      this.activeChildren.set(null);
    }
  }

  public setActiveChildren(children: TMagnoSidebarItemData[] | undefined) {
    if (children && children.length > 0) {
      this.activeChildren.set(children);
    } else {
      this.activeChildren.set(null);
    }
  }
}
