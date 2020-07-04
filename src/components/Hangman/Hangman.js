import React from 'react';
import { Component } from 'react';
import DisplayWord from './DisplayWord';
import './Hangman.css';
import Guess from './Guess';
import Pics from './DisplayAttempts/Pics'; 
import WrongLetters from './WrongLetters'; 

const movieTitle = "The Snowpiercer"

class Hangman extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            guessedLetters: [],
            sentence: movieTitle.split(''),
            remainingGuesses: 5,
            wrongLetters : [],
         }
    }

    updateGuessedLetters = (letter) => {
        letter = letter.toLowerCase();
        if (this.state.guessedLetters.includes(letter)){
            alert(`You already guessed ${letter}!`)
        } else {
        this.setState({
            guessedLetters : [...this.state.guessedLetters, letter]
            })
        }
    }

    
    updateRemainingGuesse = (letter) => {
        if (!this.state.guessedLetters.includes(letter) && !this.state.sentence.includes(letter)) {
           this.setState({
            remainingGuesses : this.state.remainingGuesses -1, 
           })
        }
    }      

    // getWrongLetters = () => {
    //     setState(wrongLetters : this.state.guessedLetters.filter(letter => {
    //         return !this.state.sentence.includes(letter)
    //     }))
    // }

    render(){
        return(
            <div className="Hangman">
                <DisplayWord sentence={this.state.sentence} guessedLetters={this.state.guessedLetters}/>
                <Guess updateGuessedLetters={this.updateGuessedLetters} getWrongLetters={this.getWrongLetters} />
                {/* <h1>{wrong}</h1> */}
                {/* <Pics movieTitle={movieTitle}/> */}
            </div>
        )
    }

}

export default Hangman;