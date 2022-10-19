function debounce(func, delay) {
  let timeOutId;
  return function (...args) {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}

const inputText = document.getElementById("checking");

function findSuggestions(e) {
  console.log(e.target.value);
}

const modFindSuggestion = debounce(findSuggestions, 300);

inputText.addEventListener("input", modFindSuggestion);
