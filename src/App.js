import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import { StateProvider } from "./StateProvider.js";
import Sidebar from './Components/Sidebar';
import Users from './Components/Users';
import Shippings from './Components/Table';

function App() {
  return (
    <StateProvider>
    <div className="App">
      <Sidebar/>
      <div className="main">
      <Switch>
          <Route path="/home" component={Shippings}></Route>
          <Route path="/shippings" component={Shippings}></Route>
          <Route path="/users" component={Users}></Route>
        </Switch>
        </div>
    </div>
    </StateProvider>
  );
}

export default App;
