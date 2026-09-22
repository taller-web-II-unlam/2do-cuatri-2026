import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpleado } from './detail-empleado';

describe('DetailEmpleado', () => {
  let component: DetailEmpleado;
  let fixture: ComponentFixture<DetailEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEmpleado],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailEmpleado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
