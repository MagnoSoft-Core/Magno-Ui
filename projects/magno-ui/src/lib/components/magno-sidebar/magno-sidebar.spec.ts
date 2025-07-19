import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoSidebar } from './magno-sidebar';

describe('MagnoSidebar', () => {
  let component: MagnoSidebar;
  let fixture: ComponentFixture<MagnoSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
