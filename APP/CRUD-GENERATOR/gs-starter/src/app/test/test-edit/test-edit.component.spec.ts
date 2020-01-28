import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestEditComponent } from './test-edit.component';
import { TestService } from '../test.service';

describe('TestEditComponent', () => {
  let component: TestEditComponent;
  let fixture: ComponentFixture<TestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TestService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
