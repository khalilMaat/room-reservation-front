import {UserModel} from "./User.model";
import {ReservationDetails} from "./ReservationDetails.model";
import {PaymentMethodEnum} from "./enum/PaymentMethod.enum";

export class InvoiceModel {
  id?: string;
  issuedDate?: Date;
  paymentMethod?: PaymentMethodEnum;
  admin?: UserModel = {};
  reservation?: ReservationDetails = {};

  constructor(
    id?: string,
    issuedDate?: Date,
    paymentMethod?: PaymentMethodEnum,
    admin?: UserModel,
    reservation?: ReservationDetails,
  ) {
    this.id = id;
    this.issuedDate = issuedDate;
    this.paymentMethod =paymentMethod;
    if (admin) {
      this.admin = admin;
    }
    if (reservation) {
      this.reservation = reservation;
    }
  }
}
