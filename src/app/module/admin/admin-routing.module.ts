import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PanelComponent} from "./panel/panel.component";
import {AddroomComponent} from "./room-managment/add-room/add-room.component";
import {UpdateroomComponent} from "./room-managment/update-room/update-room.component";
import {ShowroomComponent} from "./room-managment/show-room/show-room.component";
import { ShowUserComponent } from './user-managment/show-user/show-user.component';
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { AddReservationComponent } from './reservation-managment/add-reservation/add-reservation.component';
import { ShowRerservationComponent } from './reservation-managment/show-reservation/show-reservation.component';
import { UpdateUserComponent } from './user-managment/update-user/update-user.component';
import { LoginComponent } from '../client/auth/login/login.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: PanelComponent,
    children: [
      { path: 'main', component: MainComponent },
      // room
      { path: 'show-room', component: ShowroomComponent },
      { path: 'add-room', component: AddroomComponent },
      { path: 'update-room/:id', component: UpdateroomComponent },
      // reservation
      { path: 'add-reservation', component: AddReservationComponent },
      { path: 'show-reservation', component: ShowRerservationComponent },
      //user
      { path: 'show-user', component: ShowUserComponent },
      { path: 'add-user', component: AddUserComponent},
      { path: 'update-user/:id', component: UpdateUserComponent  },
      {path: 'login', component: LoginComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
