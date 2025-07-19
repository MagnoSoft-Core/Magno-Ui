import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoSidebarItem } from './magno-sidebar-item';

describe('MagnoSidebarItem', () => {
  let component: MagnoSidebarItem;
  let fixture: ComponentFixture<MagnoSidebarItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSidebarItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoSidebarItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
