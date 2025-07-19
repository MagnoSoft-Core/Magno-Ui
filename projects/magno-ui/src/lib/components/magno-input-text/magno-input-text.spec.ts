import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoInputText } from './magno-input-text';

describe('MagnoInputText', () => {
  let component: MagnoInputText;
  let fixture: ComponentFixture<MagnoInputText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoInputText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoInputText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
