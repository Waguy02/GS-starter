import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParcelletestListComponent } from './parcelletest-list.component';
import { ParcelletestService } from '../parcelletest.service';

describe('ParcelletestListComponent', () => {
  let component: ParcelletestListComponent;
  let fixture: ComponentFixture<ParcelletestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelletestListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ParcelletestService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelletestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
