import {RoomDetails} from "./RoomDetails.model";
import {UserModel} from "./User.model";

export class ReservationDetailsModel {
  id?: string;
  pickupDate?: Date;
  returnDate?: Date;
  totalPrice?: number;
  nbDate?: number;
  status?: string;
  user?: UserModel;
  room?: RoomDetails;


  constructor(
    id?: string,
    pickupDate?: Date,
    returnDate?: Date,
    totalPrice?: number,
    nbDate?: number,
    status?: string,
    user?: UserModel,
    room?: RoomDetails
  ) {
    this.id = id;
    this.pickupDate = pickupDate;
    this.returnDate = returnDate;
    this.totalPrice = totalPrice;
    this.nbDate = nbDate;
    this.status = status;
    this.user = user;
    this.room = room;
  }


}
