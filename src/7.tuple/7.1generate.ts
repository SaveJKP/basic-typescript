//generate tuple
const myTuple: [string, number] = ["John", 20];

myTuple[0] = "Jane";
myTuple[1] = 21;

console.log(myTuple);

//tuple label
const point: [x: number, y: number] = [10, 20];

//type alias
type Point = [x: number, y: number];
const point2: Point = [10, 20];
const point3: Point = [10, 20];
const point4: Point = [10, 20];
