import React, { useState, useEffect } from 'react';
import './Hangman.css';
import DisplayWord from './DisplayWord';
import Guess from './Guess';
import GifsList from './GigsToDisplayAttempts/GifsList';
import HangmanIntro from './HangmanIntro';
import HangmanMenu from './HangmanMenu';


const year = 2005;
const randomNum = Math.floor(Math.random() * 20)
const nonLetterSigns = [',',':',"'"]
const e = ['è','é','ê', 'ë']

const Hangman = () => {

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [movieData, setMovieData] = useState(null);
    const [guesses, setGuesses] = useState(5);
    const [wrongLetters, setWrongLetters] = useState([]);


    //Fetch Array of popluar Movies by Year
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&year=${year}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setMovieData(data.results[randomNum]))
    }, [])


    // // select Year of Movie 
    // handleSelectYear = (event) => {
    //     this.setState({ year: event.target.value });
    // }

    // Array of GuessedLetters
    const updateGuessedLetters = (letter) => {
        !guessedLetters.includes(letter) &&
        setGuessedLetters([...guessedLetters, letter.toLowerCase()])
        
    }

    // Array of WronglyGussedLetters 
    const getWronglyGuessedLetters = () => {
        const wrongLetters = guessedLetters.filter(letter => {
            return !movieData.title.split('').includes(letter) && !movieData.title.split('').includes(letter.toUpperCase())
        })
        return wrongLetters;
    }

    // Num Remaing Guesses 
    const getRemainingGuesses = () => {
        const remainingGuesses = guesses - getWronglyGuessedLetters().length;
        return remainingGuesses;
    }


    console.log('Hangman:', movieData);
    return (
        <div className="Hangman">
            {movieData && <GifsList movieData={movieData} falseGuesses={getWronglyGuessedLetters().length} wrongLetters={getWronglyGuessedLetters()} />}
            <HangmanMenu />
            <div className="introHangman">
                <div className='fly-in'>
                    <HangmanIntro />
                    {movieData && <DisplayWord movieData={movieData} guessedLetters={guessedLetters} />}
                </div>
            </div>
            <Guess updateGuessedLetters={updateGuessedLetters} />
            {movieData && <GifsList movieData={movieData} falseGuesses={getWronglyGuessedLetters().length} wrongLetters={getWronglyGuessedLetters()} />}
        </div>
    )

}

export default Hangman;