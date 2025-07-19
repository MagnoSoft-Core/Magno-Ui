import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoLayoutContainer } from './magno-layout-container';

describe('MagnoLayoutContainer', () => {
  let component: MagnoLayoutContainer;
  let fixture: ComponentFixture<MagnoLayoutContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoLayoutContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoLayoutContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
