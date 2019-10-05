import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleRight, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pseudoRandomBytes } from 'crypto';
import getListPeopleKyiv from './listKyiv';
import getListPeopleLondon from './listLondon';


library.add(fab, faTrophy);

export default class ResultsPage extends Component {
    constructor() {
        super();
        this.state = {
            winPersonLondon: '',
            winPersonKyiv: '',
            winMsgLondon: [],
            winMsgKyiv: []
        }
    }

    getListOfPeople(list) {
        return list.map(person => person.name);
    }

    componentDidMount() {
        const [londonNom, kyivNom] = this.findNominants();
        this.setState({ winPersonKyiv: this.getWinner(kyivNom) });
        this.setState({ winPersonLondon: this.getWinner(londonNom) });
        let winnerLondon = this.getWinner(londonNom);
        let winnerKyiv = this.getWinner(kyivNom);
        this.setState({ winMsgLondon: this.findWinnerMessages(winnerLondon) });
        this.setState({ winMsgKyiv: this.findWinnerMessages(winnerKyiv) });
        console.log(this.state.winMsgKyiv, 'Smsg')
    }

    getNominations() {
        let storage = [];
        for (let i = 0; i < localStorage.length; i++) {
            storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
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
        for (let person in nominations) {
            if (winPerson[nominations[person]] === undefined) {
                winPerson[nominations[person]] = 0;
            }
            if (nominations.indexOf(nominations[person]) >= 0) {
                winPerson[nominations[person]] += 1;
            }
        }
        winPerson = Object.keys(winPerson).sort(function (a, b) {
            return winPerson[b] - winPerson[a]
        });
        return winPerson[0];
    }

    findWinnerMessages(winner) {
        let storage = [];
        let storageMessage = [];
        let objectStorage = {};
        for (let i = 0; i < localStorage.length; i++) {
            storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        for (let item in storage) {
            if (storage[item].firstNomination === winner) {
                storageMessage.push(storage[item].firstNominationMessage)
            } else if (storage[item].secondNomination === winner) {
                storageMessage.push(storage[item].secondNominationMessage)
            } else if (storage[item].thirdNomination === winner) {
                storageMessage.push(storage[item].thirdNominationMessage)
            }
        }
        return storageMessage;
    }


    render() {
        return (
            <div className='row'>
                <div className='kyivHero col-md-6'>
                    <FontAwesomeIcon icon="trophy" size='6x' />
                    <p className='isHero'>Kyiv Hero is:</p>
                    <p className='nameWinner'>{this.state.winPersonKyiv}</p>
                    {this.state.winMsgKyiv.map(msg => {
                           return <li>{msg}</li>
                        })}
                    <p>{!this.state.winPersonKyiv && 'Sorry no winners in this group'}</p>
                </div>
                <div className='londonHero col-md-6'>
                    <FontAwesomeIcon icon="trophy" size='6x' />
                    <p className='isHero'>London Hero is:</p>
                    <p className='nameWinner'>{this.state.winPersonLondon}</p>
                    <ul>
                        {this.state.winMsgLondon.map(msg => {
                           return <li>{msg}</li>
                        })}
                    </ul>
                    <p>{!this.state.winPersonLondon && 'Sorry no winners in this group'}</p>
                </div>
            </div>
        )
    }
}
