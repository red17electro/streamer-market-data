import { TestBed } from '@angular/core/testing';

import { IsinService } from './isin.service';

describe('IsinServiceService', () => {
  let service: IsinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
