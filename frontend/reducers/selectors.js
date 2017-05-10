import values from 'lodash/values';

const selectAllPokemon = (state) => {
  return values(state);
};

export default selectAllPokemon;
