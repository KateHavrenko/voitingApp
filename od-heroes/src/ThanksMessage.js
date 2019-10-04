import React, { Component } from 'react';

export default class ThanksMessage extends Component {
    render() {
        return <div className='thanksMessage'>
            <h2>Thank you!</h2>
            <p>Thanks for submitting your votes!</p>
            <p>You will learn the final results during Town Hall!</p>
        </div>
    }
}