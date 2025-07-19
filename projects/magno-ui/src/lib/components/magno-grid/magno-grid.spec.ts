import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoGrid } from './magno-grid';

describe('MagnoGrid', () => {
  let component: MagnoGrid;
  let fixture: ComponentFixture<MagnoGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
