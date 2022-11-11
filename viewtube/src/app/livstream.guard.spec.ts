import { TestBed } from '@angular/core/testing';

import { LivstreamGuard } from './livstream.guard';

describe('LivstreamGuard', () => {
  let guard: LivstreamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LivstreamGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
