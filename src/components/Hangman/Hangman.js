import React from 'react';
import { Component } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './GigsToDisplayAttempts/GifsList';
import './Hangman.css';
import ExplainHangman from './ExplainHangman';
// import themoviedb_key from './../../Keys';

// const movieTitle = "The Snowpiercer";
const year = 1995;
const themoviedb_key = '4db4144033ef5a34afbec19191f494c4';
const randomNum = Math.floor(Math.random() * 20)

class Hangman extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessedLetters: [],
            movieData: null,
            Guesses: 5,
            wrongLetters: [],
        }
    }

    //Fetch Array of popluar Movies by Year
    popularMovies = (year) => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${themoviedb_key}&year=${year}&language=en-US&page=1`
        )
            .then(res => res.json())
            .then(data => {
                this.setState({
                    movieData: data.results[randomNum],
                });
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
            return !this.state.movieData.title.split('').includes(letter) && !this.state.movieData.title.split('').includes(letter.toUpperCase())
        })
        return wrongLetters;
    }

    // Num Remaing Guesses 
    getRemainingGuesses = () => {
        const remainingGuesses = this.state.Guesses - this.getWronglyGuessedLetters().length;
        return remainingGuesses;
    }

    render() {
        const { movieData, guessedLetters } = this.state
        console.log('Hangman:', movieData);
        return (
            <div className="Hangman">
                {movieData && <GifsList movieData={movieData} falseGuesses={this.getWronglyGuessedLetters().length} wrongLetters={this.getWronglyGuessedLetters()} />}
                <div className="explainHangman">
                    <div className='fly-in'>
                        <ExplainHangman />
                        {movieData && <DisplayWord movieData={movieData} guessedLetters={guessedLetters} />}
                    </div>
                </div>
                <Guess updateGuessedLetters={this.updateGuessedLetters} />
                {movieData && <GifsList movieData={movieData} falseGuesses={this.getWronglyGuessedLetters().length} wrongLetters={this.getWronglyGuessedLetters()} />}
            </div>
        )
    }
}

export default Hangman;