import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoSofphoneDoc } from './magno-sofphone-doc';

describe('MagnoSofphoneDoc', () => {
  let component: MagnoSofphoneDoc;
  let fixture: ComponentFixture<MagnoSofphoneDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSofphoneDoc],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoSofphoneDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
