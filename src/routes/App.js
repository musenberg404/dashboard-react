import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from"react-router-dom";
import Home from '../components/Home/Home';

const App = () => (
  <Router>
    <Route exactpath="/" component={Home}></Route>
  </Router>
)

export default App;