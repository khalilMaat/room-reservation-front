import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoomService} from "../../../core/service/room.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roomForm!: FormGroup; // Set the default form control name
  carBrands: any;


  constructor(private formBuilder: FormBuilder,
              private RoomService: RoomService) {
  }


  ngOnInit() {
    this.roomForm = this.formBuilder.group({
      pickupDate: [''],
      brand: [''],
      model: [''],
      maxPrice: [''],
    });

   

  }

  onSubmit() {
    console.log("filterForm :", this.roomForm.value);
    const formValue = this.roomForm.value;
    // const formattedDate = this.formatDate(formValue.pickupDate);

    this.RoomService.findByFilters(
      formValue.pickupDate,
      formValue.brand,
      formValue.model
    ).subscribe((response) => {
      // Handle the response from the server
      console.log(response);
    });
  }


  private formatDate(date: string): string {
    // Use toLocaleDateString to format the date without the time
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString();
  }

}
