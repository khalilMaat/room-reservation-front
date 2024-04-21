import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {RoomDetails} from "../../model/RoomDetails.model";
import {InvoiceModel} from "../../model/Invoice.model";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://localhost:4000/api/v1/invoice';
  loggedUserId = this.authService.getUserDetails("id");


  constructor(private http: HttpClient, private authService:AuthService) { }



  findAllInvoices() {
    return this.http.get(`${this.baseUrl}/find-all-invoice`);
  }
  findInvoiceById(id: string) {
    return this.http.get(`${this.baseUrl}/find-invoice-by-id/${id}`);
  }

 findInvoiceByReservationId(id: string | undefined) {
    return this.http.get(`${this.baseUrl}/find-invoice-by-reservation-id/${id}`);
  }

  createInvoice(invoice: any) {
    return this.http.post<InvoiceModel>(`${this.baseUrl}/create-invoice`, invoice);
  }



}
