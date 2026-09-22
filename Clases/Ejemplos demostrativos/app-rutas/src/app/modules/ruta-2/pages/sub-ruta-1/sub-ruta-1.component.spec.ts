import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRuta1Component } from './sub-ruta-1.component';

describe('SubRuta1Component', () => {
  let component: SubRuta1Component;
  let fixture: ComponentFixture<SubRuta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubRuta1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubRuta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
