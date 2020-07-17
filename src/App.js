import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Liste from './components/Liste/Liste'
import Karten from './components/Karten/Karten'

function App() {
  return (
  <Router>
  <Route path="/" component={Home} />
    <Switch>
  
    <Route path="/liste"  component={Liste} />
    <Route path="/karten" component={Karten} />
    </Switch>
  </Router>
  );
}

export default App;
