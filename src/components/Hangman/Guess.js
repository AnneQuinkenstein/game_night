import React, { Component } from 'react';

class Guess extends Component {

    handleChange = event => {
        this.props.updateGuessedLetters(event.target.value);
        event.target.value = '';
    }

    render() {
        return (
            <input onChange={this.handleChange} type="text" name="guessedLetter" id="guessedLetter" maxLength="1" autoFocus />
        )
    }

}
export default Guess; 