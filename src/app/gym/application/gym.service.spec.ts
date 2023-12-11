import { TestBed } from '@angular/core/testing';

import { GymService } from './gym.service';
import {HttpClientModule} from "@angular/common/http";

describe('GymService', () => {
  let service: GymService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
