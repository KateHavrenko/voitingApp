import React from 'react';
import GreetingPage from './GreetingPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import VotingPage from './VotingPage';
import AdminPage from './AdminPage';
import ResultsPage from './ResultsPage';
import ThanksMessage from './ThanksMessage';
import castle from './castle.png';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={castle} alt='castle' />
        <h1>September Heroes</h1>
      </div>
      <Router>
        {/* <GreetingPage></GreetingPage> */}
        <Switch>
          <Route exact path="/" component={GreetingPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/voting" component={VotingPage} />
          <Route exact path="/results" component={ResultsPage} />
          <Route exact path="/thanks" component={ThanksMessage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
