import {UserModel} from "./User.model";
import {ReservationDetailsModel} from "./ReservationDetails.model";
import {PaymentMethodEnum} from "./enum/PaymentMethod.enum";

export class CreateInvoiceModel {
  // paymentMethod!: PaymentMethodEnum;
  paymentMethod = PaymentMethodEnum.CASH;
  issuedDate!: Date;
  adminId!: string;
  reservationId!: string;

  constructor(
    issuedDate: Date,
    adminId: string,
    reservationId: string
  ) {
    this.issuedDate = issuedDate;
    this.adminId = adminId;
    this.reservationId = reservationId;
  }
}
