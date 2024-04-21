import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {PanelComponent} from "./panel/panel.component";
import {AddroomComponent} from "./room-managment/add-room/add-room.component";
import {UpdateroomComponent} from "./room-managment/update-room/update-room.component";
import {ShowroomComponent} from "./room-managment/show-room/show-room.component";
import {ShowReservationComponent} from "./reservation-managment/show-reservation/show-reservation.component";

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
      { path: 'show-reservation', component: ShowReservationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
