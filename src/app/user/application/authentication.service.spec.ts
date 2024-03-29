import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {expect} from "@angular/flex-layout/_private-utils/testing";
import {HttpClientModule} from "@angular/common/http";

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
