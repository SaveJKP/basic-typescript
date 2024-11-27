//destructuring array
const myArray6: number[] = [1, 2, 3];
const [a, b, c] = myArray6;
console.log(a, b, c);

//destructuring object
const myObject: { name1: string; age1: number } = {
  name1: "John",
  age1: 20,
};
const { name1, age1 } = myObject;
console.log(name1, age1);

//destructuring function
function sayHi({ name1, age1 }: { name1: string; age1: number }): void {
  console.log(`Hi ${name1} ${age1}`);
}
sayHi(myObject);

//function nested destructuring
const myObject2 = ({
  name2,
  age2,
  address: { province },
}: {
  name2: string;
  age2: number;
  address: { province: string };
}) => {
  console.log(`Hi ${name2} ${age2} ${province}`);
};

myObject2({ name2: "john", age2: 18, address: { province: "Bangkok" } });
