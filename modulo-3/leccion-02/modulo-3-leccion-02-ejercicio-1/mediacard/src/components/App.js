import React from 'react';
import MediaCard from './MediaCard';
import '../App.css';

const animals = [
  {
    name: 'Jack',
    date: 'Lunes 26 de Junio de 2017',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec porta nunc. Suspendisse potenti. Maecenas dui libero, auctor in iaculis eget, vehicula vitae velit. Vestibulum sodales in mi eu consequat. Aliquam ullamcorper sem in ipsum sodales, a pretium ex mattis. Quisque pretium nisi in ultricies porttitor. Integer tristique eo urna, sit amet semper ipsum vehicula et.',
    likes: '37',
  },
  {
    name: 'Ruben',
    date: 'Sábado 21 de Julio de 1991',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec porta nunc. Suspendisse potenti. Maecenas dui libero, auctor in iaculis eget, vehicula vitae velit. Vestibulum sodales in mi eu consequat. Aliquam ullamcorper sem in ipsum sodales, a pretium ex mattis. Quisque pretium nisi in ultricies porttitor. Integer tristique eo urna, sit amet semper ipsum vehicula et.',
    likes: '267483',
  },
];

const items = [];

for (const animal of animals) {
  items.push(
    <MediaCard
      name={animal.name}
      date={animal.date}
      text={animal.text}
      likes={animal.likes}
    />
  );
}

class App extends React.Component {
  render() {
    return items;
  }
}

export default App;
