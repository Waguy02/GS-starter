import { TestBed } from '@angular/core/testing';
import { UserGroupService } from './user1-group1.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserGroupService', () => {
  let service: UserGroupService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserGroupService]
    });

    service = TestBed.get(UserGroupService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
