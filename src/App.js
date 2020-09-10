import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import TableBody from './Components/Table';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Switch>
          <Route path="/users" component={TableBody}></Route>
          <Route path="/" component={TableBody}></Route>
          <Route component={Error} />
        </Switch>
    </div>
  );
}

export default App;
