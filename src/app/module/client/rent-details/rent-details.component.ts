import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReservationService} from "../../../core/service/reservation-service";
import {ReservationDetailsModel} from "../../../model/ReservationDetails.model";

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent implements OnInit {

  rentalDetails = new ReservationDetailsModel();

  constructor(private activatedRoute: ActivatedRoute, private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.rentalDetails.id = params["id"];
      }
    );


    this.reservationService.findReservationById(this.rentalDetails.id).subscribe(
      response => {
        if (response) {
          this.rentalDetails = response;
          console.log("rentalDetails: ", this.rentalDetails);
          console.log("response: ", response);
        }
      }, error => {
        alert("error fetching room details" + error.message);
      }
    );

  }

}
