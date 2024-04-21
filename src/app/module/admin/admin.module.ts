import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from './main/main.component';
import { PanelComponent } from './panel/panel.component';
import { AddroomComponent } from './room-managment/add-room/add-room.component';
import { UpdateroomComponent } from './room-managment/update-room/update-room.component';
import {DataTablesModule} from "angular-datatables";
import { ShowroomComponent } from './room-managment/show-room/show-room.component';
import { ShowReservationComponent } from './reservation-managment/show-reservation/show-reservation.component';
import { AddReservationComponent } from './reservation-managment/add-reservation/add-reservation.component';
import {ChartModule} from "angular-highcharts";


@NgModule({
  declarations: [
    MainComponent,
    PanelComponent,
    AddroomComponent,
    UpdateroomComponent,
    ShowroomComponent,
    ShowReservationComponent,
    AddReservationComponent,
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
