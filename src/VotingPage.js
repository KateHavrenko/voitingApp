import React, { Component } from 'react';
import castle from './castle.png';



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

  export default class VoitingPage extends Component{
    constructor(props) {
        super(props);
    
    }
    
    handleSubmit(event) {
        localStorage.setItem('myCat', 'Tom');
        // this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className='container'>
                <div className='logo'>
                    <img src={castle} alt='castle' />
                    <h1>September Heroes</h1>
                </div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">You are:</label>  
                        <div className="col-md-4">
                            <div className="input-group">
                                <select className="form-control" id="votingPerson">
                                {list.map(person =>
                                    <option>{person.name}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right">Who is your first nomination:</label>  
                        <div className="col-md-4">
                            <select className="form-control" id="firstNomination">
                            {list.map(person =>
                                    <option>{person.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">Why you are nominating them:</label>  
                        <div className="col-md-4">
                            <div className="input-group">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right">Who is your second nomination:</label>  
                        <div className="col-md-4">
                            <select className="form-control" id="secondNomination">
                                {list.map(person =>
                                    <option>{person.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">Why you are nominating them:</label>  
                        <div className="col-md-4">
                            <div className="input-group">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right">Who is your third nomination:</label>  
                        <div className="col-md-4">
                            <select className="form-control" id="thirdNomination">
                            {list.map(person =>
                                    <option>{person.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-5 text-right ">Why you are nominating them:</label>  
                        <div className="col-md-4">
                            <div className="input-group">
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary submitVotes'>Submit your votes</button>
                </form>
            </div>
        );
    }
}
