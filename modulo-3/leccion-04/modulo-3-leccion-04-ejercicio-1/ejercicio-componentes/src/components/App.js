import React from 'react';
import Item from './Item';
import ItemList from './ItemList';
import '../App.css';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
];

// const Items = [];
// for (const Item of arrayOfItems) {
//   Items.push(
//     <ItemList
//       name={Item.name}
//       description={Item.description}
//       quantity={Item.quantity}
//       category={Item.category}
//       price={Item.price}
//     />
//   );
// }

// Items.push(
//   <ItemList
//     name={Item.name}
//     description={Item.description}
//     quantity={Item.quantity}
//     category={Item.category}
//     price={Item.price}
//   />
// );

const ItemsFiltered = arrayOfItems.filter((item) => item.price < 10);

const PrintItems = ItemsFiltered.map((item, index) => {
  return (
    <Item
      key={index}
      id={index + 1}
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      category={item.category}
      price={item.price}
    />
  );
});

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemList items={PrintItems} />
      </div>
    );
  }
}

export default App;
