import { TestBed } from '@angular/core/testing';

import { LiveStrservService } from './live-strserv.service';

describe('LiveStrservService', () => {
  let service: LiveStrservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveStrservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
