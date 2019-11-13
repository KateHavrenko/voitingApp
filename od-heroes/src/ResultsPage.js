import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import winnerImg from './images/winner.png';
import getListPeopleKyiv from './listKyiv';
import getListPeopleLondon from './listLondon';
import { connect } from 'react-redux';

library.add(fab, faTrophy);

class ResultsPage extends Component {
    constructor() {
        super();
        this.state = {
            winPersonLondon: [],
            winPersonKyiv: [],
            winnerLondon: {},
            winnerKyiv: {}
        }
    }

    getListOfPeople(list) {
        return list.map(person => person.name);
    }

    // updateStateFunction(){
    //     const [londonNom, kyivNom] = this.findNominants();
    //     this.setState({ winPersonKyiv: this.getWinner(kyivNom) });
    //     this.setState({ winPersonLondon: this.getWinner(londonNom) });
    //     let winnerLondon = this.getWinner(londonNom);
    //     let winnerKyiv = this.getWinner(kyivNom);
    //     this.setState({ winnerLondon: winnerLondon });
    //     this.setState({ winnerKyiv: winnerKyiv });
    // }

    componentDidMount() {
        const [londonNom, kyivNom] = this.findNominants();
        this.setState({ winPersonKyiv: this.getWinner(kyivNom) });
        this.setState({ winPersonLondon: this.getWinner(londonNom) });
        let winnerLondon = this.getWinner(londonNom);
        let winnerKyiv = this.getWinner(kyivNom);
        this.setState({ winnerLondon: winnerLondon });
        this.setState({ winnerKyiv: winnerKyiv });
       
     
        // const [londonNom, kyivNom] = this.findNominants();
        // this.setState({ winPersonKyiv: this.getWinner(kyivNom) });
        // this.setState({ winPersonLondon: this.getWinner(londonNom) });
        // let winnerLondon = this.getWinner(londonNom);
        // let winnerKyiv = this.getWinner(kyivNom);

        // this.setState({ winLondon: this.renderWinner(winnerLondon) });
        // this.setState({ winKyiv: this.renderWinner(winnerKyiv) });
        // this.setState(winKyiv => {return {winKyiv: this.renderWinner(winnerKyiv) }});
        
        // this.setState({ winMsgWritersLondon: this.findWinnerMessagesWriter(winnerLondon) });
        // this.setState({ winMsgWritersKyiv: this.findWinnerMessagesWriter(winnerKyiv) });
    }

    getNominations() {
        let storage = [];
        for (let i = 0; i < this.props.items.length; i++) {
            storage.push(this.props.items[i]);
        }
        let nominations = [];
        for (let person in storage) {
            nominations.push(storage[person].firstNomination,
                storage[person].secondNomination,
                storage[person].thirdNomination)
        }
        return nominations;
    }

    findNominants() {
        let listKyiv = this.getListOfPeople(getListPeopleKyiv());
        let listLondon = this.getListOfPeople(getListPeopleLondon());
        let nominations = this.getNominations();
        let londonNom = [];
        let kyivNom = [];
        for (let person in nominations) {
            if (listKyiv.indexOf(nominations[person]) > -1) {
                kyivNom.push(nominations[person]);
            } else {
                londonNom.push(nominations[person]);
            }
        }
        return [londonNom, kyivNom];
    }

    getWinner(nominations) {
        let winPerson = {};
        let winners = [];
        for (let person in nominations) {
            if (winPerson[nominations[person]] === undefined) {
                winPerson[nominations[person]] = 0;
            }
            if (nominations.indexOf(nominations[person]) >= 0) {
                winPerson[nominations[person]] += 1;
            }
        }
        let winPersonsNames = {...winPerson};
        winPersonsNames = Object.keys(winPerson).sort(function (a, b) {
            return winPerson[b] - winPerson[a]
        });
        let val = winPerson[winPersonsNames[0]];
        for (let key in winPerson) {
            if (winPerson[key] === val) {
                winners.push(key);
            }
        }
        return winners;
    }

    collectWinnerObject(winners) {
        debugger;
        let storage = [];
        let msgInfo = [];
        let winnerInfo = {};
        for (let i = 0; i < this.props.items.length; i++) {
            storage.push(this.props.items[i]);
        }
        for (let winner in winners) {
            for (let item in storage) {
                if (storage[item].firstNomination === winners[winner]) {
                    msgInfo.push(storage[item].firstNominationMessage, 
                    storage[item].voterPerson)
                } else if (storage[item].secondNomination === winners[winner]) {
                    msgInfo.push(storage[item].secondNominationMessage,
                        storage[item].voterPerson)
                } else if (storage[item].thirdNomination === winners[winner]) {
                    msgInfo.push(storage[item].thirdNominationMessage,
                        storage[item].voterPerson)
                }
                winnerInfo[winners[winner]] = msgInfo;
            }
            msgInfo = [];
        }
        console.log('storageMessage', winnerInfo);
        return winnerInfo;
    }


    render() {
        console.log('winKyivP', this.state.winnerKyiv)
        let winnerInfoKyiv = this.collectWinnerObject(this.state.winnerKyiv);
        let winnerInfoLondon = this.collectWinnerObject(this.state.winnerLondon);
        return (
            <div className='row winners'>
                <div className='kyivHero col-md-6'>
                    <img src={winnerImg} alt='winner' />
                    <p className='isHero'>Kyiv Hero is:</p>
                        {Object.keys(winnerInfoKyiv).map((winner, key) => {
                            return (<div className='winner'><p key={key} className='nameWinner'>{winner}</p>
                                <div className='message'>
                                    {winnerInfoKyiv[winner].map(msg => {
                                        return (
                                            <p>{msg}</p>
                                        )
                                    })}
                                </div>
                            </div>
                            )
                        })} 
                    <p>{this.state.winPersonKyiv.length === 0 && 'Sorry no winners in this group'}</p>
                </div>
                <div className='londonHero col-md-6'>
                    <img src={winnerImg} alt='winner' />
                    <p className='isHero'>London Hero is:</p>
                        {Object.keys(winnerInfoLondon).map((winner, key) => {
                            return (<div className='winner'><p key={key} className='nameWinner'>{winner}</p>
                                <div className='message'>
                                    {winnerInfoLondon[winner].map(msg => {
                                        return (
                                            <p>{msg}</p>
                                        )
                                    })}
                                </div>
                            </div>
                            )
                        })} 
                    <p>{this.state.winPersonLondon.length === 0 && 'Sorry no winners in this group'}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state };
}

export default connect(mapStateToProps)(ResultsPage);