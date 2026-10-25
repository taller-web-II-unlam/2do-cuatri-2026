import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpleado } from './update-empleado';

describe('UpdateEmpleado', () => {
  let component: UpdateEmpleado;
  let fixture: ComponentFixture<UpdateEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmpleado],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateEmpleado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
