import {Component, OnInit} from '@angular/core';
import {RoomDetails} from "../../../model/RoomDetails.model";
import {RoomService} from "../../../core/service/room.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-all-room',
  templateUrl: './all-room.component.html',
  styleUrls: ['./all-room.component.css']
})
export class AllroomComponent implements OnInit {

  roomForm!: FormGroup; // Set the default form control name
  RoomDetails: RoomDetails[] = [];
  carBrands: any;

  constructor(private formBuilder: FormBuilder,
              private RoomService: RoomService,
              private router: Router) {
  }

  ngOnInit(): void {
    // const today: Date = new Date().toISOString().split('T')[0];
    // this.findAllFreeroomByDateTime(new Date().toISOString().split('T')[0]);
    const today: string = new Date().toISOString().split('T')[0];
    console.log("today", today);
    this.roomForm = this.formBuilder.group({
      pickupDate: [today],
      brand: [''],
      model: [''],
      maxPrice: [''],
    });

    this.onSubmit();


  }

  onSubmit() {
    console.log("filterForm :", this.roomForm.value);
    const formValue = this.roomForm.value;
    // const formattedDate = this.formatDate(formValue.pickupDate);

    this.RoomService.findByFilters(
      formValue.pickupDate,
      formValue.brand,
      formValue.model
    ).subscribe(
      response => {
        console.log(response);
        this.RoomDetails = response;
      }, error => {
        console.log(error);

      }
    );
  }

}
