import React, { createContext, useState, useEffect } from "react";
import items from "../components/data";

export const HangmanContext = createContext();

const languages = {
  english: "en",
  deutsch: "de",
  italiano: "it",
  português: "pt",
  türkçe: "tr",
};

const nonLetterSigns = [
  ",",
  ":",
  "'",
  "-",
  ".",
  "!",
  "(",
  ")",
  "&",
  "1",
  "2",
  "3",
];
const eTypes = ["è", "é", "ê", "ë"];
const aTypes = ["ä", "å", "à", "æ", "á"];
const uTypes = ["ü", "û", "ù", "ú"];
const iTypes = ["ï", "î", "ì", "í"];
const oTypes = ["ô", "ö", "ò", "ó"];
const nTypes = ["ñ"];
const sTypes = ["ş", "ß"];
const gTypes = ["ğ"];
const cTypes = ["ç"];

const HangmanContextComponent = (props) => {
  const [style, setStyle] = useState(1);
  const [movieData, setMovieData] = useState(null);
  const [movie, setMovie] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [choosenLang, setchoosenLang] = useState("english");
  const [gameState, setGameState] = useState("");
  const [answer, setAnswer] = useState([]);
  const [gifs, setGifs] = useState(null);
  const [falseGuesses, setFalseGuesses] = useState(0);

  // to use the flying Input on the Intro just once
  const mount = () => {
    setStyle(style + 1);
    setGuessedLetters([]);
    setGameState("");
  };

  useEffect(() => {
    const getMovie = () => {
      fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setMovie(data));
    };
    getMovie();
  }, [choosenLang, style, setGameState]);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 100);
    const getMovieData = () => {
      if (movie && movie.items.length > 0) {
        fetch(
          `https://api.themoviedb.org/3/movie/${movie.items[randomNum].id}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}`
        )
          .then((res) => res.json())
          .then((data) => setMovieData(data));
      } else {
        fetch(
          `https://api.themoviedb.org/3/movie/${items[randomNum].id}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=${languages[choosenLang]}`
        )
          .then((res) => res.json())
          .then((data) => setMovieData(data));
      }
    };
    getMovieData();
  }, [movie]);

  // fetch Gifs for Top and Bottom Hangman-Game & Winning Page
  const movieTitle =
    movieData &&
    (movieData.original_language === "en"
      ? movieData.original_title
      : movieData.title);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${movieTitle}&tag=movie&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => setGifs(data.data));
  }, [movieTitle]);

  //Select Language of MovieTitle

  const options = Object.keys(languages);

  const handleChooseLang = (lang, e) => {
    e.preventDefault();
    setchoosenLang(lang.opt);
    setGuessedLetters([]);
    setGameState("");
  };

  // Array of GuessedLetters
  const updateGuessedLetters = (letter) => {
    !guessedLetters.includes(letter) &&
      setGuessedLetters([...guessedLetters, letter.toLowerCase()]);
  };

  // Array of WronglyGussedLetters
  const wrongLetters = guessedLetters.filter((letter) => {
    return (
      !movieData.title.split("").includes(letter) &&
      !movieData.title.split("").includes(letter.toUpperCase())
    );
  });

  // Display Word

  useEffect(() => {
    let letterState = "";
    setAnswer(
      movieData &&
        movieData.title.split("").map((letter) => {
          if (letter === " ") {
            letterState = " ";
          } else if (guessedLetters.includes(letter.toLowerCase())) {
            letterState = letter;
          } else if (
            guessedLetters.includes("e") &&
            eTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("a") &&
            aTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("u") &&
            uTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("i") &&
            iTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("o") &&
            oTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("n") &&
            nTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("s") &&
            sTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("g") &&
            gTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (
            guessedLetters.includes("c") &&
            cTypes.includes(letter.toLowerCase())
          ) {
            letterState = letter;
          } else if (nonLetterSigns.includes(letter)) {
            letterState = letter;
          } else {
            letterState = "_";
          }
          return letterState;
        })
    );
  }, [guessedLetters, movieData]);

  // Num False Guesses
  useEffect(() => {
    setFalseGuesses(wrongLetters.length);
  }, [wrongLetters]);

  //gameOver?
  useEffect(() => {
    const guesses = 6;
    const remainingGuesses = guesses - falseGuesses;
    const gameOver = () => {
      const answerGiven = answer.length > 0;
      const answerCorrect = answerGiven && !answer.includes("_");
      if (remainingGuesses <= 0) {
        setGameState("loose");
      } else if (answerCorrect) {
        setGameState("won");
      } else {
        setGameState("");
      }
    };
    answer && gameOver();
  }, [answer, falseGuesses]);

  return (
    <HangmanContext.Provider
      value={{
        style,
        movieData,
        gifs,
        options,
        choosenLang,
        guessedLetters,
        answer,
        gameState,
        falseGuesses,
        wrongLetters,
        handleChooseLang: handleChooseLang,
        updateGuessedLetters: updateGuessedLetters,
        mount: mount,
      }}
    >
      {props.children}
    </HangmanContext.Provider>
  );
};

export default HangmanContextComponent;
