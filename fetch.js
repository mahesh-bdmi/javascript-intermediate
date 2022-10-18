// const URL = "https://jsonplaceholder.typicode.com/posts";
const URL = "https://www.reddit.com/r/india";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
