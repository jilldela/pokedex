import React from 'react';

class ItemDetail extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { item } = this.props;

    return (
      <ul>
        <li>
          <h2>{item.name}</h2>
        </li>
      </ul>
    );
  }
}

export default ItemDetail;
