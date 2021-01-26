import React from 'react';

class ItemList extends React.Component {
  render() {
    return <ul className='item-list'>{this.props.items}</ul>;
  }
}
export default ItemList;
