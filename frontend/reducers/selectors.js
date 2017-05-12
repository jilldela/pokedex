import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state);
};

export const selectPokemonItem = ({ pokemonDetail }, itemId) => {
  return pokemonDetail.items.find(item => itemId === item.id);
};
