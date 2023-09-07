//constructor function
function person(name,age,city,msg,greet){
    this.name=name,
    this.age=age,
    this.city=city,
    this.msg=msg,
    this.greet =function greet(){
        return msg;
        }
}
//creates objects
const person1=new person("mani",28,"sr nagar","hello");
const person2=new person("dinesh",25,"alkhapuri");
const person3=new person("naveen",26,"madhura nagar");
person2.greet= function(){
    return("hi")
}

//access properties
console.log(person1.name,person1.age,person1.city,person1.greet());
console.log(person2.name,person2.age,person2.city,person2.greet());
console.log(person3.name,person3.age,person3.city,person3.greet());