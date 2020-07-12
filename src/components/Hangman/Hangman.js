import React from 'react';
import { Component } from 'react';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './GigsToDisplayAttempts/GifsList';
import './Hangman.css';
import ExplainHangman from './ExplainHangman';
// import themoviedb_key from './../../Keys';

const movieTitle = "The Snowpiercer";
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
            `https://api.themoviedb.org/3/discover/movie?api_key=4db4144033ef5a34afbec19191f494c4&year=${year}&language=en-US&page=1`
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
                {/* <ExplainHangman/> */}
                <GifsList movieTitle={movieTitle} falseGuesses={this.getWronglyGuessedLetters().length} wrongLetters={this.getWronglyGuessedLetters()} />
                {/* <div id="fly-in">
                    <div><span>Guess</span>the Movie Title</div>
                    <div>Letter<span>by Letter</span></div>
                    <div>No more than 5 <span> wrong guesses</span></div>
                    <div><span>Start by</span>typing with your keyboard</div>
                    <div><span>Letter</span>by Letter</div>
                    <div>Wrong guess<span>will lead to</span></div>
                    <div>reavel a <span> picture</span></div>
                    <div><span>which might or might not</span> be from the movie</div>
                </div> */}
                <div id='fly-inStay'>
                    <DisplayWord sentence={this.state.sentence} guessedLetters={this.state.guessedLetters} />
                    <Guess updateGuessedLetters={this.updateGuessedLetters} />
                </div>
            </div>
        )
    }
}

export default Hangman;