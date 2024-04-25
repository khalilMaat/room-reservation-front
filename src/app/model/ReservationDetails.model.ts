import { numberFormat } from "highcharts";
import {RoomDetails} from "./RoomDetails.model";
import {UserModel} from "./User.model";

export class ReservationDetails {
  id?: string;
  startTime?: Date;
  endTime?: Date;
  totalPrice?: number;
  nbDate?: number;
  status?: string;
  user?: UserModel;
  room?: RoomDetails;


  constructor(
    id?: string,
    startTime?: Date,
    endTime?: Date,
    totalPrice?: number,
    nbDate?: number,
    status?: string,
    user?: UserModel,
    room?: RoomDetails
  ) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.totalPrice = totalPrice;
    this.nbDate = nbDate;
    this.status = status;
    this.user = user;
    this.room = room;
  }


}
