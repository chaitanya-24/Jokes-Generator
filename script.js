const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

function generateJokes() {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data.joke);
        jokes.innerHTML = data.joke;
    })
    .catch((err) => console.log(err));
}

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
