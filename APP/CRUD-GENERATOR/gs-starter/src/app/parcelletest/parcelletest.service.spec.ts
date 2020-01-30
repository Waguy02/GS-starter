import { TestBed } from '@angular/core/testing';
import { ParcelletestService } from './parcelletest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ParcelletestService', () => {
  let service: ParcelletestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParcelletestService]
    });

    service = TestBed.get(ParcelletestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
