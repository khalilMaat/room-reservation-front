export class CreateReservation {
  userId?: string;
  roomId?: string;
  pickupDate?: Date;
  returnDate?: Date;
  nbDays?: number;
  totalPrice?: number;

  constructor(
    userId?: string,
    roomId?: string,
    pickupDate?: Date,
    returnDate?: Date,
    nbDays?: number,
    totalPrice?: number
  ) {
    this.userId = userId;
    this.roomId = roomId;
    this.pickupDate = pickupDate;
    this.returnDate = returnDate;
    this.nbDays = nbDays;
    this.totalPrice = totalPrice;
  }
}
