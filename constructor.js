function vehicle(type,brand,modelno) {
    this.typeName = type;
    this.brandName = brand;
    this.modelno= modelno;
  }
  
  vehicle.prototype.nationality ="English";
  
var vehicle1=new vehicle("car","audi",2023)
var vehicle2=new vehicle("car","toyota",2024);
console.log(vehicle1)
console.log(vehicle2)
console.log(vehicle1.nationality);
console.log(vehicle2.brandName);
console.log(vehicle1.modelno);