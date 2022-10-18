// const rootNode = document.getRootNode();
// const headings = rootNode.children[0].children[1].children[0].children;

// for (let i = 1; i <= headings.length; i++) {
//   let time = 5000 * Math.random();
//   setTimeout(() => {
//     headings[i - 1].style.color = `rgb(${Math.floor(
//       Math.random() * 255
//     )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
//   }, time);
// }

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

//Callback Hell
// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = RandomColor();
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = RandomColor();
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = RandomColor();
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = RandomColor();
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = RandomColor();
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = RandomColor();
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = RandomColor();
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function changeHeading(element, name, color, time, callback, onFail) {
  setTimeout(function () {
    if (element) {
      element.textContent = name;
      element.style.color = color;
      if (callback) callback();
    } else if (callback) callback();
    else if (!element) onFail();
  }, time);
}

//Pyramid of Doom
changeHeading(
  heading1,
  "one",
  RandomColor(),
  1000,
  () => {
    changeHeading(
      heading2,
      "two",
      RandomColor(),
      1000,
      () => {
        changeHeading(
          heading3,
          "three",
          RandomColor(),
          1000,
          () => {
            changeHeading(
              heading4,
              "four",
              RandomColor(),
              1000,
              () => {
                changeHeading(
                  heading5,
                  "five",
                  RandomColor(),
                  1000,
                  () => {
                    changeHeading(
                      heading6,
                      "six",
                      RandomColor(),
                      1000,
                      () => {
                        changeHeading(heading7, "seven", RandomColor(), 1000);
                      },
                      () => console.log(`${element} was not changed`)
                    );
                  },
                  () => console.log(`${element} was not changed`)
                );
              },
              () => console.log(`${element} was not changed`)
            );
          },
          () => console.log(`${element} was not changed`)
        );
      },
      () => console.log(`${element} was not changed`)
    );
  },
  () => console.log(`${element} was not changed`)
);
