import React from 'react';

class NumbersList extends React.Component {
  constructor(props) {
    super(props);
    this.printItems = this.printItems.bind(this);
    this.state = {
      originalNumbers: this.props.numbers,
      printNumbers: this.props.numbers,
    };
  }

  printItems() {
    return this.state.printNumbers.map((number) => (
      <li key={number}>{number}</li>
    ));
  }

  //   filterItems(minorNumber) {
  //     this.setState({
  //       printNumbers: this.state.originalNumbers.filter(
  //         (number) => number > minorNumber
  //       ),
  //     });
  //   }

  filterItems({ minValue, evenNumber }) {
    this.setState({
      printNumbers: this.state.originalNumbers.filter((number) => {
        let meetsCondition = false;
        if (number > minValue) {
          meetsCondition = true;
          if (evenNumber && number % 2 === 0) {
            meetsCondition = true;
          } else {
            meetsCondition = false;
          }
          if (!evenNumber && number % 2 !== 0) {
            meetsCondition = true;
          }
        }

        return meetsCondition;
      }),
    });
  }

  render() {
    return <ul>{this.printItems()}</ul>;
  }
}

export default NumbersList;
