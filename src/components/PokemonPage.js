import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    frontImage: ""
  });

  useEffect(() => {
    fetch("http://127.0.0.1:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemonList(data))
  }, []);

  function handleSearchChange(e) {
    setSearch(e.target.value);
    const searchPokemonList = pokemonList.filter((pokemon) => {
      return pokemon.name.includes(search);
    })
    setPokemonList(searchPokemonList);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setPokemonList({...pokemonList, newPokemon})
  };

  function handleNameChange(e) {
    setNewPokemon({...newPokemon, name: e.target.value})
  };

  function handleHpChange(e) {
    setNewPokemon({...newPokemon, hp: e.target.value})
  };

  function handleFrontImage(e) {
    setNewPokemon({...newPokemon, frontImage: e.target.value})
  };

  console.log(newPokemon)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={(e) => handleSubmit(e)} newPokemon={newPokemon} setNewPokemon={setNewPokemon} handleNameChange={handleNameChange} handleHpChange={handleHpChange} handleFrontImage={handleFrontImage} />
      <br />
      <Search search={search} setSearch={setSearch} handleSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection pokemonList={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
