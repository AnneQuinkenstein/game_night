import React from 'react';
import { Component } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import Pics from './GigsToDisplayAttempts/Pics';
import './Hangman.css';

const movieTitle = "Magnolia"

class Hangman extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            guessedLetters: [],
            sentence: movieTitle.split(''),
            Guesses: 5,
            wrongLetters : [],
         }
    }

    // Array of GuessedLetters
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

    // Array of WronglyGussedLetters 
    getWronglyGuessedLetters = () => {
        const wrongLetters = this.state.guessedLetters.filter(letter => {
            return !this.state.sentence.includes(letter) && !this.state.sentence.includes(letter.toUpperCase())
        })
        return wrongLetters; 
    }

    // Num Remaing Guesses 
    getRemainingGuesses = () => {
        const remainingGuesses = this.state.Guesses - this.getWronglyGuessedLetters().length;     
        return remainingGuesses;
    }

    render(){
        return(
            <div className="Hangman">
                {/* <h1>Find the hidden sentence! Guess a letter! You got 5 Lives. If you dye, you will have a glance to the world you are searching for. </h1> */}
                <Pics movieTitle={movieTitle} falseGuesses={this.getWronglyGuessedLetters().length}/>
                <DisplayWord sentence={this.state.sentence} guessedLetters={this.state.guessedLetters}/>
                <Guess updateGuessedLetters={this.updateGuessedLetters} />
                <h1>{this.getWronglyGuessedLetters()}</h1> 
            </div>
        )
    }

}

export default Hangman;