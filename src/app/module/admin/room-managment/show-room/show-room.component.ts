import {Component, OnInit} from '@angular/core';
import {RoomDetails} from "../../../../model/RoomDetails.model";
import {RoomService} from "../../../../core/service/room.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.css']
})
export class ShowroomComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  listRoomDetails: any = [];


  constructor(private RoomService: RoomService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      language: {
        searchPlaceholder: 'Text Customer'
      }
    }

    this.RoomService.getAll().subscribe({
      next: (response) => {
          this.listRoomDetails = response;
          console.log("response get all room : ", response)
          console.log("listRoomDetails error get all room : ", this.listRoomDetails)
          this.dtTrigger.next(null);
      }, error: (error) => {
        console.log("error get all room : ", error)
        this.router.navigate(['/admin/dashboard/show-room']);
      }
    }
    )




  }



  redirectToDetails(id: string | undefined) {
    console.log(id);
    this.router.navigate(['/user/rent-details', id]);
  };


  deleteroomById(id: string | undefined) {


    this.RoomService.deleteRoomById(id).subscribe(
      (response) => {
        console.log(response)
          this.listRoomDetails = this.listRoomDetails
            .filter((item: { id: string | undefined; }) => item.id !== id);

      }, error =>{
        alert("Problem Occurred: "+ error.error.message);

      }
    )


  }


  //
}
