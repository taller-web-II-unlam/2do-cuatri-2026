import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoViejo } from './hijo-viejo';

describe('HijoViejo', () => {
  let component: HijoViejo;
  let fixture: ComponentFixture<HijoViejo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijoViejo],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoViejo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
