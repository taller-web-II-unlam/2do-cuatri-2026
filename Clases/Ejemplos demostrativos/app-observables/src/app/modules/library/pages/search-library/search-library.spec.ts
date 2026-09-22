import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLibrary } from './search-library';

describe('SearchLibrary', () => {
  let component: SearchLibrary;
  let fixture: ComponentFixture<SearchLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
