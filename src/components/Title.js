import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import background from '../arcadeEntrance.jpg';
import pacghost from '../blinky.png';




const Title = () => {

  const [style, setStyle] = useState(true);
  const [joke, setJoke] = useState(null);

  const handleClick = (event) => {
    setStyle(!style)
  }

  const changeJoke = (event) => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
      .then(response => response.data)
      .then(data => setJoke(data.joke));
  }

  return (
    <div className="Title">
      <div className={style ? "arcadeBackground" : "entranceBackground"}>
        <div className="containerSign">
          <h1 className={style ? "titleName" : "nothing"}> <i class="fa fa-long-arrow-left" aria-hidden="true" onClick={handleClick}></i> <span onClick={handleClick}> online <span className="flicker">G</span>ame Nig<span className="flickerTwo">h</span>t</span></h1>
        </div>
        <div className="containerJokes">
          <h1 className={style ? "nothing" : "jokes"} onClick={changeJoke}> Click for the fun of coding!</h1>
        </div>
        <p className={style ? "nothing" : "jokes"}>{joke}</p>

        <div className="containerPacman">
          <div className={style ? "nothing" : "gameTease"}>
            <div className='hangman'>
              <img src={pacghost} />
              <div class="center"><Link to='/hangman'>HANGMAN</Link></div>
            </div>
            <div className='hangman'>
              <img src={pacghost} />
              <div class="center"> QUARTETT</div>
            </div>
            <div className='hangman'>
              <img src={pacghost} />
              <div class="center"> CONTACT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title;