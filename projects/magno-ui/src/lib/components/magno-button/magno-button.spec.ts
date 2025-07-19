import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoButton } from './magno-button';

describe('MagnoButton', () => {
  let component: MagnoButton;
  let fixture: ComponentFixture<MagnoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
