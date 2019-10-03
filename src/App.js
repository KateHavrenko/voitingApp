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
      {/* <GreetingPage></GreetingPage> */}

      <Router>
        <div id="page-wrapper">
          <Switch>
            <Route path="/" exact component={GreetingPage} />
            <Route exact path="/voting" component={VotingPage} />
            <Route exact path="/admin" component={AdminPage} />
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
