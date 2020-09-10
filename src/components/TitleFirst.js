import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pacghost from '../blinky.png';


const Title = () => {

  const [joke, setJoke] = useState(null);
  const [style, setStyle] = useState(true);  


  const handleClick = () => {
    setStyle(false)
  }

  const changeJoke = () => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
      .then(response => response.data)
      .then(data => setJoke(data.joke));
  }

  return (
    <div className="Title page">
      <div className={style ? "arcadeBackground" : "entranceBackground"}>
        <div className="containerSign" onClick={handleClick}>
          <h1 className={style ? "titleName" : "nothing"}> <i className="fa fa-long-arrow-left" aria-hidden="true"></i> online <span className="flicker">G</span>ame Nig<span className="flickerTwo">h</span>t</h1>
        </div>
        <div className="containerJokes">
          <h1 className={style ? "nothing" : "jokes"} onClick={changeJoke}> Click for the fun of coding!</h1>
        </div>
        <p className={style ? "nothing" : "jokes"}>{joke}</p>

        <div className="containerPacman">
          <div className={style ? "nothing" : "gameTease"}>
            <div className='hangman'>
              <img src={pacghost} />
              <Link to='/hangman'>HANGMAN</Link>
            </div>
            <div className='hangman'>
              <img src={pacghost} />
             <Link to='/contact'>CONTACT</Link>
            </div>
            <div className='hangman'>
              <img src={pacghost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title;