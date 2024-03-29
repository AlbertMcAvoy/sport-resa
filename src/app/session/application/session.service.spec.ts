import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';
import {HttpClientModule} from "@angular/common/http";

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
