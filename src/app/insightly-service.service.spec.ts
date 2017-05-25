/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InsightlyServiceService } from './insightly-service.service';

describe('InsightlyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsightlyServiceService]
    });
  });

  it('should ...', inject([InsightlyServiceService], (service: InsightlyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
