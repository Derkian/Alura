import { TestBed } from '@angular/core/testing';

import { FormControlServiceService } from './form-control-service.service';

describe('FormControlServiceService', () => {
  let service: FormControlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
