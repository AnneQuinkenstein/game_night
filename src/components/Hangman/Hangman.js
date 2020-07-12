import React from 'react';
import { Component } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './GigsToDisplayAttempts/GifsList';
import './Hangman.css';
import ExplainHangman from './ExplainHangman';
// import themoviedb_key from './../../Keys';

const movieTitle = "Magnolia";
const year = 2005;

class Hangman extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessedLetters: [],
            arrMovies: [],
            sentence: movieTitle.split(''),
            Guesses: 5,
            wrongLetters: [],
        }
    }


    //Fetch Array of popluar Movies by Year
    popularMovies = (year) => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=***REMOVED***&year=${year}&language=en-US&page=1`
        )
            .then(res => res.json())
            .then(data => {
                this.setState({ arrMovies: data.results });
            })
            .catch(error => {
                console.log("There was an error fetching and parsing data", error);
            });
    };

    componentDidMount() {
        this.popularMovies(year);
    }

    // select Year of Movie 
    handleSelectYear = (event) => {
        this.setState({ year: event.target.value });
    }




    // Array of GuessedLetters
    updateGuessedLetters = (letter) => {
        letter = letter.toLowerCase();
        this.setState({
            guessedLetters: [...this.state.guessedLetters, letter]
        })
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

    render() {
        console.log('Movies', this.state.arrMovies)
        return (
            <div className="Hangman">
                <GifsList movieTitle={movieTitle} falseGuesses={this.getWronglyGuessedLetters().length} wrongLetters={this.getWronglyGuessedLetters()} />
                <div className="explainHangman">
                    <div className='fly-in'>
                        <ExplainHangman />
                        <DisplayWord sentence={this.state.sentence} guessedLetters={this.state.guessedLetters} />
                    </div>
                </div>
                <Guess updateGuessedLetters={this.updateGuessedLetters} />
                <GifsList movieTitle={movieTitle} falseGuesses={this.getWronglyGuessedLetters().length} wrongLetters={this.getWronglyGuessedLetters()} />
            </div>
        )
    }
}

export default Hangman;