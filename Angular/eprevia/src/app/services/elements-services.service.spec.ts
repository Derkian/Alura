import { TestBed } from '@angular/core/testing';

import { ElementsServicesService } from './elements-services.service';

describe('ElementsServicesService', () => {
  let service: ElementsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
