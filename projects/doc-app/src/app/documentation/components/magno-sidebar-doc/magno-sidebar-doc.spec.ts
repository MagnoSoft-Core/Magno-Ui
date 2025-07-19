import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoSidebarDoc } from './magno-sidebar-doc';

describe('MagnoSidebarDoc', () => {
  let component: MagnoSidebarDoc;
  let fixture: ComponentFixture<MagnoSidebarDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSidebarDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoSidebarDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});