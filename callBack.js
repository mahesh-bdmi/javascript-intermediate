//General Callback

function func1(callback) {
  console.log("this is func1");
  callback();
}

function func2() {
  console.log("this is func2");
}

// func1(func2);

// setTimeout

function main(e, x) {
  setTimeout(function hello() {
    console.log("this is setTimeout1", e);
    setTimeout(function hello2() {
      console.log("this is setTimeout2", x);
    }, 5000);
  }, 1000);
}

main(5, 6);
