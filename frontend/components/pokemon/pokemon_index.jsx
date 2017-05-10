import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        this.props.pokemon.map(pokemon => {
          <li>
            <img src={pokemon.image_url} alt={pokemon.name}/>
            {pokemon.name}
          </li>
      </ul>
      })
    );
  }
}

export default PokemonIndex;
