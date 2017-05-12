import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
     this.props.requestSinglePokemon(newProps.match.params.pokemonId);
   }
  }

  render() {
    const { pokemonDetail } = this.props;

    return (
      <section>
        <h1>{pokemonDetail.name}</h1>
        <img src={pokemonDetail.image_url} alt={pokemonDetail.name} />
        <ul>
          <li>Attack: {pokemonDetail.attack}</li>
          <li>Defense: {pokemonDetail.defense}</li>
          <li>Type: {pokemonDetail.poke_type}</li>
          <li>Moves: {pokemonDetail.moves.join(', ')}</li>
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
