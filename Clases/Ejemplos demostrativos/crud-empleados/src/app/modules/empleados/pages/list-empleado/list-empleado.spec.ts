import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpleado } from './list-empleado';

describe('ListEmpleado', () => {
  let component: ListEmpleado;
  let fixture: ComponentFixture<ListEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEmpleado],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEmpleado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
