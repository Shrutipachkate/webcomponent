import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitbtnComponent } from './submitbtn.component';

describe('SubmitbtnComponent', () => {
  let component: SubmitbtnComponent;
  let fixture: ComponentFixture<SubmitbtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitbtnComponent]
    });
    fixture = TestBed.createComponent(SubmitbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
