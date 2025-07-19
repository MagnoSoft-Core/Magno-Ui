import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnoLayoutContainerDoc } from './magno-layout-container-doc';

describe('MagnoLayoutContainerDoc', () => {
  let component: MagnoLayoutContainerDoc;
  let fixture: ComponentFixture<MagnoLayoutContainerDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnoLayoutContainerDoc],
    }).compileComponents();

    fixture = TestBed.createComponent(MagnoLayoutContainerDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
