import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaActions } from './tarea-actions';

describe('TareaActions', () => {
  let component: TareaActions;
  let fixture: ComponentFixture<TareaActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
