import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {RoomService} from "../../../../core/service/room.service";
import {ReservationService} from "../../../../core/service/reservation-service";
import {ReservationDetailsModel} from "../../../../model/ReservationDetails.model";
import {AuthService} from "../../../../core/service/auth.service";
import {StatusEnum} from "../../../../model/enum/StatusEnum.enum";

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listReservationDetails: any[] = [];
  statusOptions = ['CANCELED', 'PENDING', 'CONFIRMED', 'PAYED', 'COMPLETED'];
  selectedStatus!: StatusEnum;

  constructor(private roomService: RoomService,
              private authService: AuthService,
              private reservationService: ReservationService,
  ) {
  }

  ngOnInit(): void {
    console.log('Selected Status:', this.selectedStatus);

    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.reservationService.getAllReservation().subscribe(
      (response) => {
        if (response) {
          console.log("response find all reservation : ", response)
          this.listReservationDetails = response;
          console.log("listReservationDetails  object : ", this.listReservationDetails)
          this.dtTrigger.next(null);

        }
      }, error => {
        console.log("error get all reservation : ", error)
      }
    )


  }


//
  getStatusClass(status: string | undefined): string {
    switch (status) {
      case 'CANCELED':
        return 'badge bg-gradient-danger';
      case 'PENDING':
        return 'badge bg-gradient-warning';
      case 'CONFIRMED':
        return 'badge bg-gradient-info';
      case 'PAYED':
        return 'badge bg-gradient-success';
      case 'COMPLETED':
        return 'badge bg-gradient-secondary';
      default:
        return 'badge'; // default class if the status doesn't match any case

    }
  }

  deleteReservationById(id: string | undefined) {

    let userId = this.authService.getUserDetails("id");
    this.reservationService.deleteReservationById(userId, id).subscribe(
      response => {
        if (response) {
          this.listReservationDetails = this.listReservationDetails
            .filter(item => item.id !== id);
          alert("deleted successfully: " + response);
        }
      }, error => {
        alert("Problem Occurred: " + error);

      }
    )
  }

  changeReservationStatus(id: string | undefined, status: string | undefined) {
    this.reservationService.changeReservationStatus(id, status).subscribe(
      response => {
        if (response) {
          console.log("response : ", response)
          console.log("before listReservationDetails : ", this.listReservationDetails)

          this.listReservationDetails = this.listReservationDetails.map(item =>
            item.id === response.id ? response : item
          );
          console.log("after listReservationDetails : ", this.listReservationDetails)

          alert("status changed successfully: " + response);
        }
      }, error => {
        console.log("error.error.message : ", error)
        alert("Problem Occurred: " + error.error.message);
      }
    )
  }

  handleButtonClick() {
    console.log('Button clicked in App Component');
  }
}
