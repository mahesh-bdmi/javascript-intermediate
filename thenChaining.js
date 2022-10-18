const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function RandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
}

function changeHeading(element, name, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (element) {
        element.textContent = name;
        element.style.color = color;
        resolve();
      } else reject();
    }, time);
  });
}

changeHeading(heading1, "one", RandomColor(), 1000)
  .then(() => changeHeading(heading2, "two", RandomColor(), 1000))
  .then(() => changeHeading(heading3, "three", RandomColor(), 1000))
  .then(() => changeHeading(heading4, "four", RandomColor(), 1000))
  .then(() => changeHeading(heading5, "five", RandomColor(), 1000))
  .then(() => changeHeading(heading6, "six", RandomColor(), 1000))
  .then(() => changeHeading(heading7, "seven", RandomColor(), 1000))
  .catch((error) => alert("An error occured", error));
