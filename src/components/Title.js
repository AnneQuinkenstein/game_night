import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pacghost from '../blinky.png';


const Title = () => {

  const [joke, setJoke] = useState(null);


  const changeJoke = () => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
      .then(response => response.data)
      .then(data => setJoke(data.joke));
  }

  return (
    <div className="Title page">
      <div className="titleEntranceBackground">
        <div className="containerSign">
          <h1 className="nothing"> <i className="fa fa-long-arrow-left" aria-hidden="true"></i> <span> online <span className="flicker">G</span>ame Nig<span className="flickerTwo">h</span>t</span></h1>
        </div>
        <div className="containerJokes">
          <h1 className="jokes" onClick={changeJoke}> Click for the fun of coding!</h1>
        </div>
        <p className="jokes">{joke}</p>

        <div className="containerPacman">
          <div className="titleGameTease">
            <div className='hangman'>
              <img src={pacghost} />
              <div className="titleCenter"><Link to='/hangman'>HANGMAN</Link></div>
            </div>
            <div className='hangman'>
              <img src={pacghost} />
              <div className="titleCenter"><Link to='/contact'>CONTACT</Link> </div>
            </div>
            <div className='hangman'>
              <img src={pacghost} />
              <div className="titleCenter"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title;