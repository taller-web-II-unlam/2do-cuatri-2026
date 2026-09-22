import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRuta2Component } from './sub-ruta-2.component';

describe('SubRuta2Component', () => {
  let component: SubRuta2Component;
  let fixture: ComponentFixture<SubRuta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubRuta2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubRuta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
