import { TestBed } from '@angular/core/testing';

import { ServiceSelectionService } from './service-selection.service';

describe('ServiceSelectionService', () => {
  let service: ServiceSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
