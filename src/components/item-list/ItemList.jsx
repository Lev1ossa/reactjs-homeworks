import { Component } from 'react';

class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item, idx) => (
          <li key={idx}> {item} </li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
