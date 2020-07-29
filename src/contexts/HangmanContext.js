import React, { createContext, useState, useEffect } from 'react';

export const HangmanContext = createContext();

// const nonLetterSigns = [',', ':', "'", "-"]
const e = ['è', 'é', 'ê', 'ë']


const HangmanContextComponent = (props) => {

    const [movieData, setMovieData] = useState(null);
    const [guesses, setGuesses] = useState(5);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [choosenLang, setchoosenLang] = useState('english')

    //Fetch Array of popluar Movies by Year
    const randomNum = Math.floor(Math.random() * 20)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}&sort_by=vote_average.desc&vote_count.gte=200`)
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
        setGuessedLetters([]); 
        setGuesses(5); 
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

    return (
        <HangmanContext.Provider value={{ movieData, options, choosenLang, guessedLetters, falseGuesses: getWronglyGuessedLetters().length, wrongLetters: getWronglyGuessedLetters(), handleChooseLang: handleChooseLang, updateGuessedLetters: updateGuessedLetters }}>
            {props.children}
        </HangmanContext.Provider>

    )
}

export default HangmanContextComponent; 