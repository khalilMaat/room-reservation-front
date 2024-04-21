import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../core/service/room.service";
import {RoomDetails} from "../../../model/RoomDetails.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class roomListComponent implements OnInit {

  RoomDetails: RoomDetails[] = [];

  constructor(private RoomService: RoomService, private router: Router) {
  }

  ngOnInit(): void {
    // const today: Date = new Date();
    this.findAllFreeroomByDateTime(new Date().toISOString().split('T')[0]);

  }

  findAllFreeroomByDateTime(date: string){  }

}
