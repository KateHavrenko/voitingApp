import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";
import getListPeopleKyiv from './listKyiv';
import getListPeopleLondon from './listLondon';


const list = [...getListPeopleKyiv(), ...getListPeopleLondon()];

class VoitingPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            voterPerson: '',
            firstNomination: '',
            firstNominationMessage: '',
            secondNomination: '',
            secondNominationMessage: '',
            thirdNomination: '',
            thirdNominationMessage: '',
            errorMessageYourself: false,
            errorMessageUnique: false,
            errorMessageSelectName: false,
            errorMessageEmpty: false,
            errorVoterPerson: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.checkVotedPersons();
    }

    getVoters() {
        let storage = [];
        for (var i = 0; i < localStorage.length; i++) {
            storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        let voters = [];
        for (let person in storage) {
            voters.push(storage[person].voterPerson)
        }
        return voters;
    }

    checkVotedPersons() {
        let voters = this.getVoters();
        if (voters.indexOf(this.state.voterPerson) >= 0) {
            this.setState({ errorVoterPerson: true })
        }
    }

    handleClick(event) {
        event.preventDefault();
        let voters = this.getVoters();
        if (this.state.firstNomination === '' ||
            this.state.secondNomination === '' ||
            this.state.thirdNomination === '') {
            this.setState({ errorMessageSelectName: true })
            setTimeout(() => {
                this.setState({ errorMessageSelectName: false })
            }, 3000);
        } else if (this.state.voterPerson === this.state.firstNomination ||
            this.state.voterPerson === this.state.secondNomination ||
            this.state.voterPerson === this.state.thirdNomination) {
            this.setState({ errorMessageYourself: true })
            setTimeout(() => {
                this.setState({ errorMessageYourself: false })
            }, 3000);
        } else if (this.state.firstNomination === this.state.secondNomination ||
            this.state.firstNomination === this.state.thirdNomination ||
            this.state.secondNomination === this.state.thirdNomination) {
            this.setState({ errorMessageUnique: true })
            setTimeout(() => {
                this.setState({ errorMessageUnique: false })
            }, 3000);
        } else if (this.state.firstNominationMessage === '' ||
            this.state.secondNominationMessage === '' ||
            this.state.thirdNominationMessage === '') {
            this.setState({ errorMessageEmpty: true })
            setTimeout(() => {
                this.setState({ errorMessageEmpty: false })
            }, 3000);
        } else if (voters.indexOf(this.state.voterPerson) >= 0) {
            this.setState({ errorVoterPerson: true })
            setTimeout(() => {
                this.setState({ errorVoterPerson: false })
            }, 3000);
        } else {
            const { voterPerson,
                firstNomination,
                firstNominationMessage,
                secondNomination,
                secondNominationMessage,
                thirdNomination,
                thirdNominationMessage } = this.state;
            let votesData = {
                voterPerson,
                firstNomination,
                firstNominationMessage,
                secondNomination,
                secondNominationMessage,
                thirdNomination,
                thirdNominationMessage
            };
            localStorage.setItem(this.state.voterPerson, JSON.stringify(votesData))
            const { history } = this.props;
            history.push('/thanks');
        }
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const options = list.map((person, index) => <option>{person.name}</option>);
        return (
            <div className='container'>
                <form className='form'>
                    <div className='row errorMsg'>
                        {this.state.errorMessageYourself && <div className='col-md-12 text-center error'>
                            Sorry you can not vote for yourself</div>}
                        {this.state.errorMessageUnique && <div className='col-md-12 text-center error'>
                            Sorry you can not vote for the same person more than once</div>}
                        {this.state.errorMessageSelectName && <div className='col-md-12 text-center error'>
                            Sorry you should choose someone</div>}
                        {this.state.errorMessageEmpty && <div className='col-md-12 text-center error'>
                            Sorry you should fill in the message fields</div>}
                        {this.state.errorVoterPerson && <div className='col-md-12 text-center error'>
                            Sorry you already had voted</div>}
                    </div>
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