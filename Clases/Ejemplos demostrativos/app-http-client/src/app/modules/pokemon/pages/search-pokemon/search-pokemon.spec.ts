import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemon } from './search-pokemon';

describe('SearchPokemon', () => {
  let component: SearchPokemon;
  let fixture: ComponentFixture<SearchPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
