import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './auth/register/register.component';
import {RoomDetailsComponent} from './room-details/room-details.component';
import {SharedModule} from "../../shared/shared.module";
import {AllroomComponent} from './all-room/all-room.component';
import {RentDetailsComponent} from './rent-details/rent-details.component';
import {RouterModule} from "@angular/router";
import {CarouselModule} from "ngx-owl-carousel-o";
import { roomListComponent } from './room-list/room-list.component';
import {NgbAccordionButton, NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    RoomDetailsComponent,
    AllroomComponent,
    RentDetailsComponent,
    roomListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    CarouselModule,
    NgbModule
  ]
})
export class ClientModule {
}
