import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateReservation} from "../../model/create-reservation.model";
import {ReservationDetailsModel} from "../../model/ReservationDetails.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:4000/reservation';


  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getAllReservation() {
    return this.http.get<ReservationDetailsModel[]>(`${this.baseUrl}/all`);
  }

  createReservation( reservation: any){
    return this.http.post(`${this.baseUrl}/create`, reservation);
  }

  findReservationByUser( id: string){
    return this.http.get<ReservationDetailsModel[]>(`${this.baseUrl}/find-reservation-by-user-id/${id}`);
  }

  findAllPayedReservation(){
    return this.http.get<ReservationDetailsModel[]>(`${this.baseUrl}/find-all-payed-reservation`);
  }

  findReservationById(id: string | undefined) {
    return this.http.get<ReservationDetailsModel>(`${this.baseUrl}/find-reservation-by-id/${id}`);
  }

  deleteReservationById(userId: string | undefined, id: string | undefined) {
    return this.http.delete<ReservationDetailsModel>(`${this.baseUrl}/delete-reservation-by-id/${userId}/${id}`);
  }


  changeReservationStatus(id: string | undefined, status: string | undefined) {
    const adminId = this.authService.getUserDetails("id");
    console.log("adminId from service ::::", adminId);
    return this.http.put<ReservationDetailsModel>(`${this.baseUrl}/change-reservation-status/${id}/${adminId}`, status);
  }
}
