const jokeElem = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const url = "https://icanhazdadjoke.com/";

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch(url, config);
  const data = await res.json();
  jokeElem.innerHTML = data.joke;
}
