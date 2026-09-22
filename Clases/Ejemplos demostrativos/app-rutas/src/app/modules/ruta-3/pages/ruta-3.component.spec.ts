import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ruta3Component } from './ruta-3.component';

describe('Ruta3Component', () => {
  let component: Ruta3Component;
  let fixture: ComponentFixture<Ruta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ruta3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ruta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
