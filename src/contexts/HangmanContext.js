import React, { createContext, useState, useEffect } from 'react';

export const HangmanContext = createContext();

const HangmanContextComponent = (props) => {

    const [movieData, setMovieData] = useState(null);
    const [guesses, setGuesses] = useState(5);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [choosenLang, setchoosenLang] = useState('english');
    const [gameState, setGameState] = useState('');
    const [answer, setAnswer] = useState([]); 
  
    //Fetch Array of popluar Movies by Year
    const randomNum = Math.floor(Math.random() * 20)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}&sort_by=vote_average.desc&vote_count.gte=200`)
            .then(res => res.json())
            .then(data => setMovieData(data.results[randomNum])); 
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
            setGuessedLetters([...guessedLetters, letter.toLowerCase()]);
            setAnswer(ans)
    }

    // Array of WronglyGussedLetters 
    const getWronglyGuessedLetters = () => {
        const wrongLetters = guessedLetters.filter(letter => {
            return !movieData.title.split('').includes(letter) && !movieData.title.split('').includes(letter.toUpperCase())
        })
        return wrongLetters;
    }

    // Display Word 

    useEffect(()=> setAnswer(ans), [guessedLetters, movieData])

    let letterState = '';
    const nonLetterSigns = [',', ':', "'", "-"]
    const eTypes = ['è', 'é', 'ê', 'ë']
    const aTypes = ['ä', 'å','à', 'æ', 'á']
    // const uTypes = ['ü', 'û', 'ù', 'ú']
    // const iTypes = ['ï', 'î', 'ì', 'í']
    // const oTypes = ['ô' , 'ö', 'ò', 'ó']
    // const nTypes = ['ñ']
    // const sTypes = ['ş', 'ß']
    // const gTpyes = ['ğ']
    // const cTypes = ['ç']

    const ans = (movieData && movieData.title.split('')
        .map(letter => {
            if (letter === ' ') {
                letterState = ' ';
            } else if (guessedLetters.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('e') && eTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (guessedLetters.includes('a') && aTypes.includes(letter.toLowerCase())) {
                letterState = letter
            } else if (nonLetterSigns.includes(letter)) {
                letterState = letter;
            } else {
                letterState = '_'
            }
            return letterState
        }))

  

    // Num Remaing Guesses 
    const getRemainingGuesses = () => {
        const remainingGuesses = guesses - getWronglyGuessedLetters().length;
        return remainingGuesses;
    }

    //gameOver 
    const gameOver = () => {
        if (getRemainingGuesses() <= 0) {
            setGameState('loose');
        } else if (!answer.includes('_')) {
            setGameState('won');
        };
    }

    //updateGame 
    const updateGame = (letter) => {
        updateGuessedLetters(letter);
        getRemainingGuesses();
        gameOver();
    }

    return (
        <HangmanContext.Provider value={{ movieData, options, choosenLang, guessedLetters, answer, gameState, falseGuesses: getWronglyGuessedLetters().length, wrongLetters: getWronglyGuessedLetters(), handleChooseLang: handleChooseLang, updateGame: updateGame }}>
            {props.children}
        </HangmanContext.Provider>

    )
}

export default HangmanContextComponent; 