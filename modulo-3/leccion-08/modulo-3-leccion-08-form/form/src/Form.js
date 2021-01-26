import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    //cramos estado con propiedades de la película
    this.state = {
      name: '',
      description: '',
      language: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendDataToApp = this.sendDataToApp.bind(this);
  }

  handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    const id = target.id;

    // el id según escribamos en el input de nombre, descripción o languages será diferente (name, description, language), por lo que esta es una manera bonita y sencilla de asignar automáticamente los valores de cada input a su propiedad
    this.setState(
      {
        [id]: value,
      },
      () => {
        // creo función callback para asegurarme que cuando mando los datos a APP, los datos están actualizados, es decir, se pasan justo después de actualizar el estado con setState (si lo pusiera fuera debajo de setState, se me podrian mandar datos desactualizados)
        this.sendDataToApp(this.state);
      }
    );
  }
  sendDataToApp(data) {
    this.props.handleFormInfo(data);
  }

  render() {
    return (
      <form>
        <label htmlFor='name'>
          Name
          <input
            id='name'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor='description'>
          Description
          <textarea
            id='description'
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
        </label>

        <label htmlFor='language'>
          Language
          <select
            value={this.state.language}
            id='language'
            onChange={this.handleChange}
          >
            <option value='spanish'>Spanish</option>
            <option value='english'>English</option>
            <option value='portuguese'>Portuguese</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
