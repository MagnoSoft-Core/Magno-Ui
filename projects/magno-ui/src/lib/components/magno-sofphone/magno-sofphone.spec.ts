import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoSofphone } from './magno-sofphone';

describe('MagnoSofphone', () => {
  let component: MagnoSofphone;
  let fixture: ComponentFixture<MagnoSofphone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSofphone],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoSofphone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
