import React from 'react';
import Drawer from './Drawer';
import Window from './Window';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div>
      {/* <Router>
        <Switch> */}
      {/* <Route exact path='/' component={Drawer} /> */}
      {/* </Switch>
        <Window/>
      </Router> */}
      <Drawer />
      <Window />
    </div>
  );
}

export default App;
