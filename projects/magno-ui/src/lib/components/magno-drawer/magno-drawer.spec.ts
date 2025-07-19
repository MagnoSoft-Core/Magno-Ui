import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoDrawer } from './magno-drawer';

describe('MagnoDrawer', () => {
  let component: MagnoDrawer;
  let fixture: ComponentFixture<MagnoDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
