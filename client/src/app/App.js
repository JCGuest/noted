import React from 'react';
import Drawer from './Drawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Drawer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
