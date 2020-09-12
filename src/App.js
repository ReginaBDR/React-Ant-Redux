import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { StateProvider } from "./StateProvider.js";
import Sidebar from './Components/Sidebar';
import Users from './Components/Users';
import Shippings from './Components/Table';

function App() {
  return (
    <StateProvider>
      <Router>
    <div className="App">
      <Sidebar/>
      <div className="main">
      <Switch>
          <Route path="/shippings">
            <Shippings/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/" activeClassName="active">
            <Shippings/>
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
    </StateProvider>
  );
}

export default App;
