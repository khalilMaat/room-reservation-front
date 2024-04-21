import {Component, OnInit} from '@angular/core';
import {RoomService} from "../../../../core/service/room.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddroomComponent implements OnInit {

  roomForm!: FormGroup;


  constructor(private RoomService: RoomService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.roomForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(6)],
      capacity: ['', Validators.required],
      equipment: ['', Validators.required],
      price: ['', Validators.required],
      
    });
  }




  createroom() {

    this.RoomService.createRoom(this.roomForm.value).subscribe(
        (response) => {
          console.log("response", response);

          this.roomForm.reset();
        },
        (error) => {
          console.error('Error creating room:', error.error.message);
        }
      );
    }

}
