let age = 26;
const name = "dinesh";

function greet(name, age) {
  return `Hello, ${name}! You are ${age} years old.`;
}

function updateAge(newAge) {
  age = newAge;
}

const hobbies = ["exploring web", "coding", "playing cricket"];

console.log(greet(name, age)); 

console.log("Hobbies:", hobbies); 

console.log(greet(name, age));