import React, { useState, useEffect } from 'react';
import './Hangman.css';
import HangmanFirst from './HangmanFirst';

const randomNum = Math.floor(Math.random() * 20)
const nonLetterSigns = [',', ':', "'", "-"]
const e = ['è', 'é', 'ê', 'ë']


const Hangman = () => {

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [movieData, setMovieData] = useState(null);
    const [guesses, setGuesses] = useState(5);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [choosenLang, setchoosenLang] = useState('english')

    //Fetch Array of popluar Movies by Year
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}&page=1`)
            .then(res => res.json())
            .then(data => setMovieData(data.results[randomNum]))
    }, [choosenLang])


    //Select Language of MovieTitle
    const languages = {
        english: 'en',
        deutsch: 'de',
        italiano: 'it',
        español: 'es',
        türkçe: 'tr',
    }

    const options = Object.keys(languages);

    const handleChooseLang = (lang, e) => {
        e.preventDefault();
        setchoosenLang(lang.opt);
    }

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
        <>
            <HangmanFirst
                movieData={movieData}
                falseGuesses={getWronglyGuessedLetters().length}
                wrongLetters={getWronglyGuessedLetters()}
                options={options}
                handleChooseLang={handleChooseLang}
                choosenLang={choosenLang}
                movieData={movieData} 
                guessedLetters={guessedLetters}
                updateGuessedLetters={updateGuessedLetters}
            />
        </>
    )

}

export default Hangman;