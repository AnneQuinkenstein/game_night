import React, { Component } from 'react'; 

class Guess extends Component {
      
    handleSubmit = event => {
        event.preventDefault();
        console.log(event);
      };

    handleChange = event => {
        this.props.updateGuessedLetters(event.target.value);
        event.target.value = '';
    }
    
    render() {
        return(
                <form className="Guess" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="guessedLetter" id="guessedLetter" maxLength="1" autoFocus />
                </form>         
            )
    }
    
}
export default Guess; 