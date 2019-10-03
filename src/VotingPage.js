import React, { Component } from 'react';
import castle from './castle.png';


export default function VotingPage() {
    return (
        <div className='container'>
            <div className='logo'>
                <img src={castle} alt='castle' />
                <h1>September Heroes</h1>
            </div>
            <form className='form'>
                <div className="form-group row">
                    <label className="col-md-5 text-right ">You are:</label>  
                    <div className="col-md-4">
                        <div className="input-group">
                            <select className="form-control" id="votingPerson">
                                <option>Kate</option>
                                <option>Ann</option>
                                <option>Peter</option>
                                <option>Olga</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-5 text-right">Who is your first nomination:</label>  
                    <div className="col-md-4">
                        <select className="form-control" id="firstNomination">
                            <option>Kate</option>
                            <option>Ann</option>
                            <option>Peter</option>
                            <option>Olga</option>
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
                            <option>Kate</option>
                            <option>Ann</option>
                            <option>Peter</option>
                            <option>Olga</option>
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
                            <option>Kate</option>
                            <option>Ann</option>
                            <option>Peter</option>
                            <option>Olga</option>
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
            </form>
        </div>
    );
}
