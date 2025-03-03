import { TestBed } from '@angular/core/testing';

import { UpcomingmatchesapiService } from './upcomingmatchesapi.service';

describe('UpcomingmatchesapiService', () => {
  let service: UpcomingmatchesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingmatchesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
