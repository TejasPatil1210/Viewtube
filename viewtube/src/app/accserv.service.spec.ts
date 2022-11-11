import { TestBed } from '@angular/core/testing';

import { AccservService } from './accserv.service';

describe('AccservService', () => {
  let service: AccservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
