function getUser(user: { name: string; age: number; city?: string }) {
  console.log(user);
}

const user3 = { name: "John", age: 20, city: "Bangkok" };
getUser(user3);
