export class RoomDetails {
  id?: string;
  name?: string;
  capacity?: number;
  equipment?: string[];
  price?: string;

  constructor(
    id?: string,
    name?: string,
    capacity?: number,
    equipment?: string[],
    price?: string
) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.equipment = equipment;
    this.price = price;
  }


}
