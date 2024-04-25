import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RoomDetails} from "../../model/RoomDetails.model";
import {AuthService} from "./auth.service";
import {ReservationDetails} from "../../model/ReservationDetails.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:4000/room';
  loggedUserId = this.authService.getUserDetails("id");
  constructor(private http: HttpClient, private authService:AuthService) { }

  // findAllBrand() {
  //   // return this.http.get<RoomDetails>(this.baseUrl);
  //   return this.http.get(`${this.baseUrl}/all`);
  // }

  getAll() {
    // return this.http.get<RoomDetails>(this.baseUrl);
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  countByNumberRoom() {
    return this.http.get("http://localhost:4000/analysis/count-number-room");
  }

  countByPickupMonth() {
    return this.http.get("http://localhost:4000/analysis/count-by-pickup-month");
  }

  countByCreatedOn() {
    return this.http.get("http://localhost:4000/analysis/count-by-created-on");
  }


  findById(idRoom: string | undefined) {
    return this.http.get<RoomDetails>(`${this.baseUrl}/${idRoom}`);
  }

  createRoom(RoomForm: any) {
    return this.http.post<RoomDetails>(`${this.baseUrl}/create`, RoomForm);
  }

  updateRoom(idRoom: any, RoomForm: any) {
    return this.http.put<RoomDetails>(`${this.baseUrl}/${idRoom}`, RoomForm);

  }
  
  deleteRoomById(id: string | undefined) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  findByFilters(
    pickupDate: string | null,
    name: string | null,
    maxPrice: number | null
  ): Observable<any> {
    let params = new HttpParams()
      .set('pickupDate', pickupDate || '')
      .set('name', name || '')
      .set('maxPrice', maxPrice !== null ? maxPrice.toString() : '');


    return this.http.get(`${this.baseUrl}/filter-Room`, { params });
  }
}
