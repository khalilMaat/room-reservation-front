import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllroomComponent } from './all-room.component';

describe('AllroomComponent', () => {
  let component: AllroomComponent;
  let fixture: ComponentFixture<AllroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllroomComponent]
    });
    fixture = TestBed.createComponent(AllroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
