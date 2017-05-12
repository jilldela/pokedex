import merge from 'lodash/merge';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const defaultState = {
  image_url: '',
  name: '',
  attack: '',
  defense: '',
  poke_type: '',
  moves: []
};

const pokemonDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      newState = merge({}, action.pokemon);
      return newState;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
