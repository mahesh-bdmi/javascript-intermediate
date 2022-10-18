URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else reject("Something went Wrong");
    };
    xhr.send();
  });
}

sendRequest("GET", URL).then((response) => {
  data = JSON.parse(response);
  console.log(data);
});
