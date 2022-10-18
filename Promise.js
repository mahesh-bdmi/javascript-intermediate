const bath = ["water", "soap", "bucket", "mug", "shampoo"];

const wash = new Promise((resolve, reject) => {
  if (bath.includes("soap") && bath.includes("shampoo")) {
    resolve(startBath());
  } else {
    reject("You can't bath now");
  }
});

function startBath() {
  console.log("You can bath now");
}

setTimeout(() => console.log("Hello world!"));

wash.then(() => console.log("You can go now")).catch((e) => console.log(e));
