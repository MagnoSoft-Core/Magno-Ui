import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoDrawerDoc } from './magno-drawer-doc';

describe('MagnoDrawerDoc', () => {
  let component: MagnoDrawerDoc;
  let fixture: ComponentFixture<MagnoDrawerDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoDrawerDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoDrawerDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});