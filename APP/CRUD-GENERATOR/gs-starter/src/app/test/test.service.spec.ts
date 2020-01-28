import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TestService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });

    service = TestBed.get(TestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
