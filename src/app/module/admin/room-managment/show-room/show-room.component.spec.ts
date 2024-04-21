import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomComponent } from './show-room.component';

describe('ShowroomComponent', () => {
  let component: ShowroomComponent;
  let fixture: ComponentFixture<ShowroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowroomComponent]
    });
    fixture = TestBed.createComponent(ShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
