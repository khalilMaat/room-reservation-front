import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../core/service/room.service";
import {RoomDetails} from "../../../model/RoomDetails.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/service/auth.service";
import {ReservationService} from "../../../core/service/reservation-service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  RoomDetails = new RoomDetails();

  reservationForm!: FormGroup;
  roomId: any;

  constructor(private RoomService: RoomService,
              private authService: AuthService,
              private reservationService: ReservationService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.roomId = params['id'];

    });
    this.reservationForm = this.fb.group({
      pickupDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      user: this.fb.group({
        id: this.authService.getUserDetails("id") || 4
      }),
      room: this.fb.group({
        id: this.roomId || 1
      })
    })


    this.route.params.subscribe(
      params => {
        this.RoomDetails.id = params["id"];
        console.log("this.RoomDetails.id", this.RoomDetails.id)
      }
    );

    this.RoomService.findById(this.RoomDetails.id).subscribe(
      response => {
        if (response) {
          this.RoomDetails = response;
        }
      }, error => {
        alert("error fetching room details" + error.message);
      }
    );

    // this.initializeForm();

    // end ngOnInit
  }


  createReservation() {

    console.log("this.reservationForm", this.reservationForm.value)
    this.reservationService.createReservation(this.reservationForm.value).subscribe(
      response => {
        console.log("response", response);
        this.router.navigateByUrl('/rental-history');
      }, error => {
        console.log("error", error);

      }
    )
  }


}

