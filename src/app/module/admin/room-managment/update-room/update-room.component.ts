import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../../../core/service/room.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {RoomDetails} from "../../../../model/RoomDetails.model";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateroomComponent implements OnInit {
  RoomDetails = new RoomDetails();

  roomForm!: FormGroup;


  constructor(private RoomService: RoomService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    const roomId = this.route.snapshot.params['id'];

    this.roomForm.patchValue({_id: roomId});

    this.RoomService.findById(this.roomForm.value._id).subscribe(
      response => {
        if (response) {
          console.log("RoomDetails : ", this.roomForm.value, " response : ", response)
          this.roomForm.setValue(response);
          console.log("RoomDetails : ", this.roomForm.value)
        }
      }, error => {
        alert("error fetching room details" + error.message);
      }
    );
  }

  initForm(): void {
    this.roomForm = this.fb.group({
      _id: [null],
      name: [null, Validators.required],
      capacity: [null, Validators.required],
      equipment: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  updateForm(RoomDetails: RoomDetails): void {
    this.roomForm.patchValue(RoomDetails);
  }

  updateroom() {
    this.RoomService.updateRoom(this.roomForm.value._id, this.roomForm.value).subscribe(
      (response) => {
        console.log("form before send", this.roomForm.value);
        console.log("response", response);
        alert("updated successfully")
      },
      (error) => {
        this.router.navigate(['/admin/dashboard/show-room']);


      }
    );
  }

}
