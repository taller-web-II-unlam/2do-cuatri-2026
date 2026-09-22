import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoNuevo } from './hijo-nuevo';

describe('HijoNuevo', () => {
  let component: HijoNuevo;
  let fixture: ComponentFixture<HijoNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoNuevo],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoNuevo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
