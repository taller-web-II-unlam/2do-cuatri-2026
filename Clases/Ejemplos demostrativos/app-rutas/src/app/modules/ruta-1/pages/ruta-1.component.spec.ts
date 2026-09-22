import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruta1Component } from './ruta-1.component';

describe('Ruta1Component', () => {
  let component: Ruta1Component;
  let fixture: ComponentFixture<Ruta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ruta1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ruta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
