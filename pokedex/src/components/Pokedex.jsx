import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemonData } from "../api";
import pokemonTypeColors from "../pokemonTypeColors.json";
import "../css/Pokedex.css";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    const numPokemonFetch = 150;

    const fetchFromLocalStorage = async () => {
      const savedItems = localStorage.getItem("pokemons");
      if (savedItems) {
        const parsed = JSON.parse(savedItems);
        setPokemons(parsed);
        return parsed;
      }
      return [];
    };

    const fetchPokemons = async (existingPokemons) => {
      for (let id = existingPokemons.length + 1; id <= numPokemonFetch; id++) {
        if (isCancelled) break;

        try {
          const pokemon = await getPokemonData(id);
          if (!isCancelled) {
            setPokemons((prev) => {
              const updated = [...prev, pokemon];
              localStorage.setItem("pokemons", JSON.stringify(updated));
              return updated;
            });
          }
        } catch (error) {
          console.error(`Failed to fetch Pokémon with ID ${id}:`, error);
        }

        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };

    const init = async () => {
      const existingPokemons = await fetchFromLocalStorage();
      if (!isCancelled) {
        await fetchPokemons(existingPokemons);
      }
    };

    init();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) {
      localStorage.setItem("pokemons", JSON.stringify(pokemons));
    }
  }, [pokemons]);

  return (
    <div className="pokemon-container">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          type={pokemon.type}
          image={pokemon.image}
          color={pokemonTypeColors[pokemon.type]}
        />
      ))}
    </div>
  );
}

export default Pokedex;
