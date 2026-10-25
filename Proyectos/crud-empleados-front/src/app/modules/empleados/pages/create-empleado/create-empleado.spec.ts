import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpleado } from './create-empleado';

describe('CreateEmpleado', () => {
  let component: CreateEmpleado;
  let fixture: ComponentFixture<CreateEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmpleado],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEmpleado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
