import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import background from '../arcadeEntrance.jpg';
import pacghost from '../blinky.png';




const Title = () => {

  const [style, setStyle] = useState(true);
  const [joke, setJoke] = useState(null);


  const handleClick = (event) => {
    setStyle( !style )
  }

  const changeJoke = (event) => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
      .then(response => response.data)
      .then(data => setJoke(data.joke));
  }

  return (
    <div className="Title">
      <div className={style ? "arcadeBackground" : "entranceBackground"}>
        <h1 className={style ? "titleName" : "nothing"}><i class="fa fa-long-arrow-left" aria-hidden="true" onClick={handleClick}></i> <span onClick={handleClick}>online Game Night</span></h1>
        <h1 className={style ? "nothing" : "jokes"} onClick={changeJoke}> <span onClick={changeJoke}>What</span> <span onClick={changeJoke}> is so </span> <span onClick={changeJoke}>funny</span> about <span onClick={changeJoke}>... </span></h1>
        <p className={style ? "nothing" : "jokes"}>{joke}</p>
      </div>
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
          <div class="center"> QUIZ</div>
        </div>
      </div>
    </div>
  )

}

export default Title;