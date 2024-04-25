import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {RoomDetailsComponent} from "./room-details/room-details.component";
import {AllroomComponent} from "./all-room/all-room.component";
import {RentDetailsComponent} from "./rent-details/rent-details.component";
import {roomListComponent} from "./room-list/room-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full',},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'all-room', component: AllroomComponent},
  {path: 'room-list', component: roomListComponent},
  //{path: 'rent-details/:id', component: RentDetailsComponent},
  {path: 'room-details/:id', component: RoomDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
