import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoTooltip } from './magno-tooltip';

describe('MagnoTooltip', () => {
  let component: MagnoTooltip;
  let fixture: ComponentFixture<MagnoTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoTooltip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoTooltip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
