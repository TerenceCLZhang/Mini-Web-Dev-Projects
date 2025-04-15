const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonData = async (id) => {
  const response = await fetch(`${BASE_URL}${id}`);
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    type: data.types[0].type.name,
    image: data.sprites.front_default,
  };
};
