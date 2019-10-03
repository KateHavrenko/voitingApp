import React, { Component } from 'react';
import castle from './castle.png';



export default class GreetingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: null,
            passwordCorrect: null
        }
    }

    checkPassword = () => {
        debugger;
        if (this.state.password === '55ouvre-toi') {
            this.setState({passwordCorrect: true})
        } else {
            this.setState({passwordCorrect: false})
        }
    }

    on_Change = (e) => {
        this.setState({password: e.target.value})
    }
     
    render() {
        console.log('state', this.state.password)
        return (
            <div className='container'>
                <div className='logo'>
                    <img src={castle} alt='castle' />
                    <h1>September Heroes</h1>
                </div>
                <form className='form text-center'>
                    <div className='offset-md-4 col-md-4'>Enter admin password:</div>
                    <div className='offset-md-4 col-md-4'>
                        <input className='form-control center-block' value={this.state.password} onChange={this.on_Change} type='text'/>
                    </div>
                    <div className='offset-md-4 col-md-4'>
                        <button className='btn btn-danger seeResult' onClick={this.checkPassword} >See results</button>
                    </div>
                </form>
            </div>
        )
    }
    
}