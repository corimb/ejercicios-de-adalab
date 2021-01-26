import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='title'>Numbers List</h1>
        <NumbersList numbers={numbers} />
        <div>
          <form>
            <label>
              Number:
              <input
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
