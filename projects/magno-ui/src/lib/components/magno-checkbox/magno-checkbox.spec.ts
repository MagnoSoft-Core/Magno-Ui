import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoCheckbox } from './magno-checkbox';

describe('MagnoCheckbox', () => {
  let component: MagnoCheckbox;
  let fixture: ComponentFixture<MagnoCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
