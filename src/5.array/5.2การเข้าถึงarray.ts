let myArray1: string[] = ["apple", "banana", "cherry"];
myArray1[1] = "orange";
console.log(myArray1[1]);

//array forloop
for (let i = 0; i < myArray1.length; i++) {
  console.log(myArray1[i]);
}
//while loop
let i = 0;
while (i < myArray1.length) {
  console.log(myArray1[i]);
  i++;
}

//array type alliase เหมือน object
type employee = {
  name: string;
  age: number;
};
let myArray3: employee[] = [];
myArray3.push({ name: "John", age: 20 });
myArray3.push({ name: "Jane", age: 21 });

// for of
for (let employee of myArray3) {
  console.log(employee.name);
}

// for in
for (let i in myArray3) {
  console.log(myArray3[i].name);
}

//forEach
myArray3.forEach((employee) => {
  console.log(employee.name);
});
