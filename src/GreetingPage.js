import React, { Component } from 'react';
import './Greetingpage.css'
import castle from './castle.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import VotingPage from './VotingPage';

 
library.add(fab, faCheckSquare, faCoffee, faArrowCircleRight)

export default class GreetingPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
            
      }
    }
    
    render() {
        return (
            <Router>
                <div>
                    <div className='logo'>
                        <img src={castle} alt='castle'/>
                        <h1>September Heroes</h1>
                    </div>
                    <div className='information'>
                        <p>A OneDome Hero is someone who delivers exceptional perfomance.
                            Examples of execptional perfomance could be:
                        </p>
                        <ul>
                            <li>Going out of their way to help a colleague with a challenge</li>
                            <li>Absolutely nailining an importance piece of work</li>
                            <li>Creating an ingenious solition to a problem</li>
                            <li>Smashing to a target</li>
                        </ul>
                        <p>We aim to have a Hero for each office, however you can use your votes to 
                            nominate someone from eiher office.
                        </p>
                        <div className='text-center'>
                            <Link to={'/voting'}>
                                <button type="button" className="btn btn-success">
                                    <FontAwesomeIcon icon="arrow-circle-right" />
                                        Vote now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <p>Or you can see result of voting if you have the access.</p>
                    <Link to={'/admin'}><p className='text-center'>Click here</p></Link>
                </div>
            </Router>
        )
    }

}