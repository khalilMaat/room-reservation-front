import {Component, OnInit} from '@angular/core';
import { ReservationService } from 'src/app/core/service/reservation-service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  reservationForm!: FormGroup;


  constructor(private ReservationService: ReservationService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.reservationForm = this.fb.group({
      userId: ['', Validators.required, Validators.minLength(6)],
      roomId: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      
      
    });
  }




  createReservation() {

    this.ReservationService.createReservation(this.reservationForm.value).subscribe(
        (response) => {
          console.log("response", response);

          this.reservationForm.reset();
        },
        (error) => {
          console.log(error.message);
          
          this.router.navigate(['/admin/dashboard/show-reservation']);
        }
      );
    }

}
