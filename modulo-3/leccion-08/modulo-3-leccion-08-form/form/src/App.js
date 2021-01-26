import React from 'react';
import './App.css';
import Form from './Form';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.handleFormInfo = this.handleFormInfo.bind(this);
  }

  handleFormInfo(data) {
    this.setState({
      user: data,
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Formulario de películas</h1>
        <Form handleFormInfo={this.handleFormInfo} />
        <Card updatedUser={this.state.user} />
      </div>
    );
  }
}

export default App;
