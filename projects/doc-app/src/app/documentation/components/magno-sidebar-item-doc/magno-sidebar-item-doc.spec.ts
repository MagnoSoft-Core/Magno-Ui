import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoSidebarItemDoc } from './magno-sidebar-item-doc';

describe('MagnoSidebarItemDoc', () => {
  let component: MagnoSidebarItemDoc;
  let fixture: ComponentFixture<MagnoSidebarItemDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSidebarItemDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoSidebarItemDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});