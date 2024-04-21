import { ComponentFixture, TestBed } from '@angular/core/testing';

import { roomListComponent } from './room-list.component';

describe('roomListComponent', () => {
  let component: roomListComponent;
  let fixture: ComponentFixture<roomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [roomListComponent]
    });
    fixture = TestBed.createComponent(roomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
