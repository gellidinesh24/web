Array=[10,20,30,40,50];
console.log("original array",Array);
//count the number of element in the original array
count=Array.length;
// show the last element in array 
console.log("last element",Array[4]);
//adding new element at the end of an array
Array.push(60);
console.log("adding new element",Array);
//count the the number of elements after pushing
size=Array.length;
console.log("length",size);
//for removing the last element pop() method is used
Array.pop();
console.log("removes last element",Array);
//array slicing using index numbers
console.log(Array);
console.log(Array.slice(0,3));
//sliceArray=Array.slice(0,3);
//console.log("sliceArray");
//to show the array in reverse order using reverse() method 
console.log(Array.reverse());
//sort()
Array.sort();
console.log(Array);
Array.unshift("20");
Array.unshift("30");
console.log(Array);
//shift()method
console.log(Array.shift(1,3));
//iterating the arrau using for loop
console.log("iterating an array using for loop")
for(let i=0;i<5;i++){
    console.log(i);
}
