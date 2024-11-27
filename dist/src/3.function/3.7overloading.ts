//function overloading 1 params
function sayHello(): string;
function sayHello(name: string): string;
function sayHello(name?: unknown): unknown {
  //ถ้าไม่มี param name
  if (!name) {
    return "Hello";
  }
  if (typeof name === "string") {
    return `Hello ${name}`;
  }
  throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}

//function overloading 2 params
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: unknown, b: unknown): unknown {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return `${a} ${b}`;
  }
  throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
