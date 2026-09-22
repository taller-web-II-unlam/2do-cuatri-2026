import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesCurso } from './detalles-curso';

describe('DetallesCurso', () => {
  let component: DetallesCurso;
  let fixture: ComponentFixture<DetallesCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesCurso],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesCurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
