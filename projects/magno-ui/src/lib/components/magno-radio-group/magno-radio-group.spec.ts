import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoRadioGroup } from './magno-radio-group';

describe('MagnoRadioGroup', () => {
  let component: MagnoRadioGroup;
  let fixture: ComponentFixture<MagnoRadioGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoRadioGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoRadioGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
