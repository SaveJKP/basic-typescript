//spread operator
const myArray7 = [1, 2, 3];
const myArray8 = [...myArray7, 4, 5, 6];
console.log(myArray8);

//push
myArray8.push(...myArray7);
console.log(myArray8);
