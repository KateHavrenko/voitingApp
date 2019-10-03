import React from 'react';
import GreetingPage from './GreetingPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import VotingPage from './VotingPage';
import AdminPage from './AdminPage';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <GreetingPage></GreetingPage> */}
        <Switch>
            <Route exact path="/" component={GreetingPage} />
            <Route exact path="/admin" component={AdminPage} /> 
            <Route exact path="/voting" component={VotingPage} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
