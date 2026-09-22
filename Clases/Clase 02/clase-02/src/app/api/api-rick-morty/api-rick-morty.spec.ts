import { TestBed } from '@angular/core/testing';
import { ApiRickMorty } from './api-rick-morty.service';

describe('ApiRickMorty', () => {
  let service: ApiRickMorty;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRickMorty);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
