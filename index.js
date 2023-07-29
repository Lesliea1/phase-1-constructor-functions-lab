function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

const scooter1 = new Scooter(2023, "Red", "Model X");
const scooter2 = new Scooter(2022, "Blue", "Model Y");

const driver1 = new Driver("John Doe", 30, 5);
const driver2 = new Driver("Jane Smith", 25, 2);

const location1 = new PickupLocation("123 Main St", "New York");
const location2 = new PickupLocation("456 Oak Ave", "Los Angeles");

console.log(scooter1);
console.log(scooter2);

console.log(driver1);
console.log(driver2);

console.log(location1);
console.log(location2);
