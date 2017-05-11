import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map((poke) => (
          <li key={poke.id}>
            <img src={poke.image_url} alt={poke.name} width='40' height='40'/>
            <span>{poke.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default PokemonIndex;
