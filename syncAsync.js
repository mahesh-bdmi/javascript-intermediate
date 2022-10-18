console.log("Hello World");
const timeID = setTimeout(
  () => console.log("Hello world inside timeOut"),
  1000
);

// for (let i = 0; i <= 2000; i++) {
//   console.log("Hello world inside for-loop");
// }
clearTimeout(timeID); //clears the timeout using the ID
console.log("The end");

// setInterval

console.log("Hello world2");
// const intID = setInterval(() => console.log(Math.random()), 1000);
console.log(intID);
