import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagnoSidebarDocComponent } from './magno-sidebar-doc';

describe('MagnoSidebarDocComponent', () => {
  let component: MagnoSidebarDocComponent;
  let fixture: ComponentFixture<MagnoSidebarDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSidebarDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoSidebarDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
