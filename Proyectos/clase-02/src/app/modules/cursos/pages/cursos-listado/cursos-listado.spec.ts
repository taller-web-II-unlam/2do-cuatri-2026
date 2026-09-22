import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosListado } from './cursos-listado';

describe('CursosListado', () => {
  let component: CursosListado;
  let fixture: ComponentFixture<CursosListado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosListado],
    }).compileComponents();

    fixture = TestBed.createComponent(CursosListado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
