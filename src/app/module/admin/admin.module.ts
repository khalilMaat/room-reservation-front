import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {MainComponent} from './main/main.component';
import { PanelComponent } from './panel/panel.component';
import { AddroomComponent } from './room-managment/add-room/add-room.component';
import { UpdateroomComponent } from './room-managment/update-room/update-room.component';
import {DataTablesModule} from "angular-datatables";
import { ShowroomComponent } from './room-managment/show-room/show-room.component';

import {ChartModule} from "angular-highcharts";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './user-managment/add-user/add-user.component';
import { ShowUserComponent } from './user-managment/show-user/show-user.component';
import { AddReservationComponent } from './reservation-managment/add-reservation/add-reservation.component';
import { ShowRerservationComponent } from './reservation-managment/show-reservation/show-reservation.component';
import { UpdateUserComponent } from './user-managment/update-user/update-user.component';


@NgModule({
  declarations: [
    MainComponent,
    PanelComponent,
    AddroomComponent,
    UpdateroomComponent,
    ShowroomComponent,
    AddUserComponent,
    ShowUserComponent,
    AddReservationComponent,
    ShowRerservationComponent,
    UpdateUserComponent
    
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        ChartModule
    ]
})
export class AdminModule { }
