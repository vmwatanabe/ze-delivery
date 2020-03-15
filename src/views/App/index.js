import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Products from '../Products';
import '../../assets/sass/main.scss';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
