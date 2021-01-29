class Vehicle {
  constructor(type, model, parts, fuel) {
    this.parts = parts;
    this.parts.quality = Object.values(parts)[0] * Object.values(parts)[1];
    this.type = type;
    this.model = model;
    this.fuel = Number(fuel);
  }
  drive(num) {
    this.fuel -= num;
  }
}
