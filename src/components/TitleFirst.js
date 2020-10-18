import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pacghost from '../blinky.png';


const Title = () => {

  const [joke, setJoke] = useState(null);
  const [title, setTitle] = useState(true);  


  const handleClick = () => {
    setTitle(false)
  }

  const changeJoke = () => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
      .then(response => response.data)
      .then(data => setJoke(data.joke));
  }

  return (
    <div className="Title page">
      <div className={title ? "arcadeBackground" : "entranceBackground"}>
        <div className="containerSign" onClick={handleClick}>
          <h1 className={title ? "titleName" : "nothing"}> <i className="fa fa-long-arrow-left" aria-hidden="true"></i> online <span className="flicker">G</span>ame Nig<span className="flickerTwo">h</span>t</h1>
        </div>
        <div className="containerJokes">
          <h1 className={title ? "nothing" : "jokes"} onClick={changeJoke}> Click for the fun of coding!</h1>
        </div>
        <p className={title ? "nothing" : "jokes"}>{joke}</p>
        <div className="containerPacman">
          <div className={title ? "nothing" : "gameTease"}>
            <div className='hangman'>
              <img src={pacghost} alt="pacmanghost"/>
              <Link to='/hangman'>HANGMAN</Link>
            </div>
            <div className='hangman'>
              <img src={pacghost} alt="pacmanghost"/>
             <Link to='/contact'>CONTACT</Link>
            </div>
            <div className='hangman'>
              <img src={pacghost} alt="pacmanghost"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title;