import React from 'react';
import './App.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import About from './components/About';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/pricing' component={Pricing} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
