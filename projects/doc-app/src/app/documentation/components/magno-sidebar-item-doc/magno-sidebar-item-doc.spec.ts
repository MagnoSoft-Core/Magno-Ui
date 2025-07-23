import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagnoSidebarItemDocComponent } from './magno-sidebar-item-doc';

describe('MagnoSidebarItemDocComponent', () => {
  let component: MagnoSidebarItemDocComponent;
  let fixture: ComponentFixture<MagnoSidebarItemDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoSidebarItemDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnoSidebarItemDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
