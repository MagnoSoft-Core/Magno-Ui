import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoNavbarDoc } from './magno-navbar-doc';

describe('MagnoNavbarDoc', () => {
  let component: MagnoNavbarDoc;
  let fixture: ComponentFixture<MagnoNavbarDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoNavbarDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoNavbarDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});