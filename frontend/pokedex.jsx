import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TODO: for testing only!
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});



// TODO: for testing only!
import {requestSinglePokemon, receiveSinglePokemon} from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
window.fetchSinglePokemon = APIUtil.fetchSinglePokemon;
window.requestSinglePokemon = requestSinglePokemon;
window.receiveSinglePokemon = receiveSinglePokemon;
