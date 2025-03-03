import { TestBed } from '@angular/core/testing';

import { RecentmatchapiService } from './recentmatchapi.service';

describe('RecentmatchapiService', () => {
  let service: RecentmatchapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentmatchapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
