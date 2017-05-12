import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image_url, id } = this.props.pokemon;

    return (
      <li key={id}>
        <Link to={`/pokemon/${id}`}>
          <img src={image_url} alt={name} width='40' height='40'/>
          <span>{name}</span>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
