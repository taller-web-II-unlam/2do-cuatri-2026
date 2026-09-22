import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaList } from './tarea-list';

describe('TareaList', () => {
  let component: TareaList;
  let fixture: ComponentFixture<TareaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
