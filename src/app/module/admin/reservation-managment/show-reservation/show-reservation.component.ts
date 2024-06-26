import {Component, OnInit} from '@angular/core';
import {RoomDetails} from "../../../../model/RoomDetails.model";
import { ReservationService } from 'src/app/core/service/reservation-service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowRerservationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listReservationDetails: any = [];


  constructor(private RerservationService: ReservationService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.RerservationService.getAllReservation().subscribe({
      next: (response) => {
          this.listReservationDetails = response;
          console.log("response get all user : ", response)
          console.log("listReservationDetails error get all user : ", this.listReservationDetails)
          this.dtTrigger.next(null);
      }, error: (error) => {
        console.log("error get all user : ", error)
        this.router.navigate(['/admin/dashboard/show-user']);
      }
    }
    )




  }



  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };


  deleteRerservationById(id: string | undefined) {


    this.RerservationService.deleteReservationById(id).subscribe(
      (response) => {
        console.log(response)
          this.listReservationDetails = this.listReservationDetails
            .filter((item: { id: string | undefined; }) => item.id !== id);

      }, error =>{
        alert("Problem Occurred: "+ error.error.message);

      }
    )


  }


  //
}
