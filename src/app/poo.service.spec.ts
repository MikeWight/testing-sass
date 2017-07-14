import { TestBed, inject } from '@angular/core/testing';

import { PooService } from './poo.service';

describe('PooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PooService]
    });
  });

  it('should be created', inject([PooService], (service: PooService) => {
    expect(service).toBeTruthy();
  }));
});
