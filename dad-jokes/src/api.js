const URL = "https://icanhazdadjoke.com/";

export const getRandomDadJoke = async () => {
  const response = await fetch(URL, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data.joke;
};
