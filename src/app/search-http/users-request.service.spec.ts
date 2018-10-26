import { TestBed } from '@angular/core/testing';

import { UsersRequestService } from './users-request.service';

describe('UsersRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersRequestService = TestBed.get(UsersRequestService);
    expect(service).toBeTruthy();
  });
});
