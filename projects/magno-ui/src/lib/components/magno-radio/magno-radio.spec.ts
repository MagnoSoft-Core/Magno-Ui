import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoRadio } from './magno-radio';

describe('MagnoRadio', () => {
  let component: MagnoRadio;
  let fixture: ComponentFixture<MagnoRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoRadio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoRadio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
