import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParcelletestEditComponent } from './parcelletest-edit.component';
import { ParcelletestService } from '../parcelletest.service';

describe('ParcelletestEditComponent', () => {
  let component: ParcelletestEditComponent;
  let fixture: ComponentFixture<ParcelletestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelletestEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ParcelletestService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelletestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
