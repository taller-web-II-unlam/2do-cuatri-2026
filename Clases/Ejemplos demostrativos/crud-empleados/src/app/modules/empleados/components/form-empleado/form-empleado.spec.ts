import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpleado } from './form-empleado';

describe('FormEmpleado', () => {
  let component: FormEmpleado;
  let fixture: ComponentFixture<FormEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmpleado],
    }).compileComponents();

    fixture = TestBed.createComponent(FormEmpleado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
