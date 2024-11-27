//let เปลี่ยนค่าได้
let fname: string = "John";
fname = "Jane";
let age: number = 30;
let isStudent: boolean = true;

//const ค่าเปลี่ยนไม่ได้
const pi: number = 3.14;

console.log(fname);
console.log(age);
console.log(isStudent);
console.log(pi);

// null & undefined
let myNullVariable: null = null;
let myUndefinedVariable: undefined = undefined;

//any เป็นชนิดข้อมูลทุกชนิด
let myVariable: any = "Hello";
myVariable.toUpperCase(); //ทำงานได้

//unknown เป็นชนิดข้อมูลทุกชนิด แต่จะมีการ type check หรือก็คือประกาศมาแล้วเอาไปใช้ไม่ได้ ไม่เหมือน any
let myUnknownVariable: unknown = "Hello";
myUnknownVariable.toUpperCase(); //ทำงานไม่ได้

// type assertion + unknown
(myUnknownVariable as string).toUpperCase(); // method 1
(<string>myUnknownVariable).toUpperCase(); // method 2 สามารถใช้ได้ทั้ง 2 วิธี

//type alliase
type MyString = string;
let myString: MyString = "Hello";
