import React from 'react';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const inputValue = ev.target.value;
    this.setState({ value: inputValue });
  }

  render() {
    return (
      <div className='App'>
        <input type='text' onChange={this.handleInput}></input>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Input;
