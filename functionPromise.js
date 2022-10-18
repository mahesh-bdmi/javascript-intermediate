function bathPromise() {
  const bath = ["water", "soap", "bucket", "mug", "shampoo"];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bath.includes("soap") && bath.includes("shampoo")) {
        resolve(startBath());
      } else {
        reject("You can't bath now");
      }
    }, 2000);
  });
}

function startBath() {
  console.log("You can bath now");
}

bathPromise()
  .then(() => console.log("You can go now"))
  .catch((e) => console.log(e));
