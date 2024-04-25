import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRerservationComponent } from './show-reservation.component';

describe('ShowroomComponent', () => {
  let component: ShowRerservationComponent;
  let fixture: ComponentFixture<ShowRerservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRerservationComponent]
    });
    fixture = TestBed.createComponent(ShowRerservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
