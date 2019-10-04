import React, { Component, PureComponent } from 'react';
import ThanksMessage from './ThanksMessage.js';
import { withRouter } from "react-router-dom";


const listKyiv = [
    {
        name: 'Olena Belenko'
    },
    {
        name: 'Stanіslav Gricenko'
    },
    {
        name: 'Oleksii Bondarenko'
    },
    {
        name: 'Pavlo Davidenko'
    },
    {
        name: 'Roman Bublik'
    },
    {
        name: 'Miroslava Vinnichenko'
    }
];

const listLondon = [
    {
        name: 'Michael Powell'
    },
    {
        name: 'James Carlsen'
    },
    {
        name: 'Heather Schultz'
    },
    {
        name: 'Linda Sims'
    },
    {
        name: 'Faisal Uddin'
    }
];

const list = [...listLondon, ...listKyiv];
console.log(list);

class VoitingPage extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            voterPerson: '',
            firstNomination: '',
            firstNominationMessage: '',
            secondNomination: '',
            secondNominationMessage: '',
            thirdNomination: '',
            thirdNominationMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        // this.setState({ [event.target.name]: event.target.value });
        let votesData = { ...this.state };
        localStorage.setItem(this.state.voterPerson, JSON.stringify(votesData))
        const { history } = this.props;
        history.push('/thanks');
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state, 'state')
    }

    render() {
        const options = list.map((person, index) => <option>{person.name}</option>);
        return (
            <div className='container'>
                <form className='form'>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">You are:</label>
                        <div className="col-md-4">
                            <div className="input-group">
                                <select className="form-control" name="voterPerson"
                                    onChange={this.handleChange}>
                                    <option value=''>Select name</option>
                                    {options}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right">Who is your first nomination:</label>
                        <div className="col-md-4">
                            <select className="form-control" name="firstNomination" onChange={this.handleChange} value={this.state.firstNomination}>
                                <option value=''>Select name</option>
                                {options}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">Why you are nominating them:</label>
                        <div className="col-md-4">
                            <div className="input-group">
                                <textarea className="form-control" name="firstNominationMessage" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right">Who is your second nomination:</label>
                        <div className="col-md-4">
                            <select className="form-control" name="secondNomination" onChange={this.handleChange}>
                                <option value=''>Select name</option>
                                {options}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">Why you are nominating them:</label>
                        <div className="col-md-4">
                            <div className="input-group">
                                <textarea className="form-control" name="secondNominationMessage" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right">Who is your third nomination:</label>
                        <div className="col-md-4">
                            <select className="form-control" name="thirdNomination" onChange={this.handleChange}>
                                <option value=''>Select name</option>
                                {options}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">Why you are nominating them:</label>
                        <div className="col-md-4">
                            <div className="input-group">
                                <textarea className="form-control" name="thirdNominationMessage" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary submitVotes' onClick={this.handleClick}>Submit your votes</button>
                </form>
            </div>
        );
    }
}


export default withRouter(VoitingPage);