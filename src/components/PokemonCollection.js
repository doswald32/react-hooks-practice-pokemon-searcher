import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites.front}/>
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
