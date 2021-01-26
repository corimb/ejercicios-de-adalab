import React from 'react';
import '../App.css';
import NumbersList from './NumbersList';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', even: false };
    this.handleChange = this.handleChange.bind(this);
    this.filterNumberList = React.createRef();
    // Hay un retraso cuando enviamos el state a componentes hijo, por eso enviamos los valores por referencia
    this.minValue = React.createRef();
    this.evenNumber = React.createRef();
  }

  handleChange(event) {
    // this.filterNumberList.current.filterItems(event.target.value);
    event.target.name === 'even'
      ? this.setState({ even: event.target.checked })
      : this.setState({ value: event.target.value });
    const minValue = this.minValue.current.value;
    const evenNumber = this.evenNumber.current.checked;
    this.filterNumberList.current.filterItems({ minValue, evenNumber });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='title'>Numbers List</h1>
        <NumbersList numbers={numbers} ref={this.filterNumberList} />
        <div>
          <form>
            <label>
              Number:
              <input
                type='text'
                value={this.state.value}
                name='value'
                ref={this.minValue}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Even numbers?
              <input
                type='checkbox'
                value={this.state.even}
                name='even'
                ref={this.evenNumber}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
