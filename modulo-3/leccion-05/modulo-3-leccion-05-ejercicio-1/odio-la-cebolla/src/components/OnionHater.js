import React from 'react';
//EJERCICIO 1:
// const listener = (ev) => {
//   if (ev.target.value.includes('cebolla')) {
//     alert('ODIO LA CEBOLLA');
//   }
// };

// const alertText = <textarea onChange={listener}></textarea>;

// class OnionHater extends React.Component {
//   render() {
//     return alertText;
//   }
// }
// export default OnionHater;

//EJERCICIO 3: OPCIÓN 1
// const listener = (ev) => {
//   if (ev.target.value.includes('cebolla')) {
//     document.body.classList.add('background-red');
//   } else {
//     document.body.classList.remove('background-red');
//   }
// };

// const alertText = <textarea className='text' onChange={listener}></textarea>;

// class OnionHater extends React.Component {
//   render() {
//     return alertText;
//   }
// }
// export default OnionHater;

//EJERCICIO 3: OPCIÓN 2
class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.listener = this.listener.bind(this);
  }
  listener(ev) {
    this.forceUpdate();
    if (ev.target.value.includes('cebolla')) {
      document.body.classList.add('background-red');
    } else {
      document.body.classList.remove('background-red');
    }
  }
  render() {
    return <textarea className='text' onChange={this.listener}></textarea>;
  }
}
export default OnionHater;
