import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AdminModule} from "./module/admin/admin.module";
import {ClientModule} from "./module/client/client.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyInterceptor } from './core/service/interceptor';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AdminModule,
    ClientModule,
    HttpClientModule,
    RouterModule,
    DataTablesModule,
    NgbModule
    // Routes

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
