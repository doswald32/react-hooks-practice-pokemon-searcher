import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleSubmit, newPokemon, handleNameChange, handleHpChange, handleFrontImage }) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newPokemon.name} onChange={handleNameChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newPokemon.hp} onChange={handleHpChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.frontImage}
            onChange={handleFrontImage}
          />
        </Form.Group>
        <Form.Button onSubmit={(e) => handleSubmit(e)}>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
