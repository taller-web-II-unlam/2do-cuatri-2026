import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruta4Component } from './ruta-4.component';

describe('Ruta4Component', () => {
  let component: Ruta4Component;
  let fixture: ComponentFixture<Ruta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ruta4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ruta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
