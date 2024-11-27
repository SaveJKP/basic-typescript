//type alliase object
type User = {
  name: string;
  age: number;
};
let member: User = {
  name: "John",
  age: 20,
};

//type alliase optional
type UserOptional = {
  name: string;
  age?: number; // กำหนดค่าได้หรือไม่ก็ได้
};
let userOptional: UserOptional = { name: "John" }; //ไม่ error

//type alliase readonly
type UserReadonly = {
  readonly name: string;
  age: number;
};

let userReadonly: UserReadonly = {
  name: "John",
  age: 20,
};
userReadonly.name = "Jane"; // error ไม่สามารถเปลี่ยนค่าได้
userReadonly.age = 21; // สามารถเปลี่ยนค่าได้
