import React, { createContext, useState, useEffect } from 'react';

export const HangmanContext = createContext();

const HangmanContextComponent = (props) => {

    const [movieData, setMovieData] = useState(null);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [choosenLang, setchoosenLang] = useState('english');
    const [gameState, setGameState] = useState('');
    const [answer, setAnswer] = useState([]);
    const [gifs, setGifs] = useState(null);


    //Fetch Array of popluar Movies
    const randomNum = Math.floor(Math.random() * 20)

    useEffect(() => {
        getMovieData();
    }, [choosenLang])

    const getMovieData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}&sort_by=popularity.desc&page=1}`)
            .then(res => res.json())
            .then(data => setMovieData(data.results[randomNum]));
    }

    // fetch Gifs for Top and Bottom Hangman-Game & Winning Page 
    const movieTitle = movieData && (movieData.original_language === "en" ? movieData.original_title : movieData.title)

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${movieTitle}&tag=movie&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5`)
            .then(res => res.json())
            .then(data =>
                setGifs(data.data))
    }, [movieData])

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
        setGameState('');
    }

    // Array of GuessedLetters
    const updateGuessedLetters = (letter) => {
        !guessedLetters.includes(letter) &&
            setGuessedLetters([...guessedLetters, letter.toLowerCase()]);
    }

    // Array of WronglyGussedLetters 
    const getWronglyGuessedLetters = () => {
        const wrongLetters = guessedLetters.filter(letter => {
            return !movieData.title.split('').includes(letter) && !movieData.title.split('').includes(letter.toUpperCase())
        })
        return wrongLetters;
    }

    // Display Word 

    useEffect(() => setAnswer(updateDisplayedWord), [guessedLetters, movieData])

    let letterState = '';
    const nonLetterSigns = [',', ':', "'", "-", '.', '!', '(',')','&']
    const eTypes = ['è', 'é', 'ê', 'ë']
    const aTypes = ['ä', 'å', 'à', 'æ', 'á']
    const uTypes = ['ü', 'û', 'ù', 'ú']
    const iTypes = ['ï', 'î', 'ì', 'í']
    const oTypes = ['ô', 'ö', 'ò', 'ó']
    const nTypes = ['ñ']
    const sTypes = ['ş', 'ß']
    const gTypes = ['ğ']
    const cTypes = ['ç']

    const updateDisplayedWord = (movieData && movieData.title.split('')
        .map(letter => {
            if (letter === ' ') {
                letterState = ' ';
            } else if (guessedLetters.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('e') && eTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('a') && aTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('u') && uTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('i') && iTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('o') && oTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('n') && nTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('s') && sTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('g') && gTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('c') && cTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (nonLetterSigns.includes(letter)) {
                letterState = letter;
            } else {
                letterState = '_'
            }
            return letterState
        }))



    // Num Remaing Guesses 
    const guesses = 5;
    const getRemainingGuesses = () => {
        const remainingGuesses = guesses - getWronglyGuessedLetters().length;
        return remainingGuesses;
    }

    //gameOver? 
    useEffect(() => {
        { answer && gameOver(); }
    }, [answer])

    const gameOver = () => {
        if (getRemainingGuesses() <= 0) {
            setGameState('loose');
        } else if (!answer.includes('_')) {
            setGameState('won');
        } else {
            setGameState('');
        };
    }

    return (
        <HangmanContext.Provider value={{ movieData, gifs, options, choosenLang, guessedLetters, answer, gameState, falseGuesses: getWronglyGuessedLetters().length, wrongLetters: getWronglyGuessedLetters(), handleChooseLang: handleChooseLang, updateGuessedLetters: updateGuessedLetters }}>
            {props.children}
        </HangmanContext.Provider>

    )
}

export default HangmanContextComponent; 