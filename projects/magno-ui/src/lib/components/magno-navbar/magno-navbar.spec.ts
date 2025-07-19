import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoNavbar } from './magno-navbar';

describe('MagnoNavbar', () => {
  let component: MagnoNavbar;
  let fixture: ComponentFixture<MagnoNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
