import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li className='item'>
        <h5 className='quantity'>#{this.props.id}</h5>
        <h5 className='quantity'>{this.props.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className='text-muted'>{this.props.description}</h6>
        </div>
        <div className='badge'>{this.props.category}</div>
        <h5 className='price'>{this.props.price}€</h5>
      </li>
    );
  }
}
export default Item;
