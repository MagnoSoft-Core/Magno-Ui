import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoInputTextarea } from './magno-input-textarea';

describe('MagnoInputTextarea', () => {
  let component: MagnoInputTextarea;
  let fixture: ComponentFixture<MagnoInputTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoInputTextarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoInputTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
