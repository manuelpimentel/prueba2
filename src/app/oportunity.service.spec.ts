/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OportunityService } from './oportunity.service';

describe('OportunityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OportunityService]
    });
  });

  it('should ...', inject([OportunityService], (service: OportunityService) => {
    expect(service).toBeTruthy();
  }));
});
