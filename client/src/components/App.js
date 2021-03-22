import React from 'react';
import Drawer from './Drawer';
import Landing from './Landing';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
// Redux
import { Provider } from 'react-redux';
import store from '../store.js';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Router>
        	<Switch> */}
      {/* <Route exact path='/' component={Drawer} /> */}
      {/* </Switch>
       	 <Window/>
     	 </Router> */}
      <Drawer />
      <Landing />
    </Provider>
  );
};

export default App;
