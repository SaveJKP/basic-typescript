function showDetail(user: { name: string; age: number }) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

showDetail({ name: "John", age: 20 });
