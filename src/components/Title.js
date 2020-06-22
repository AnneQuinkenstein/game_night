import React from 'react';
import background from '../arcadeEntrance.jpg';

const style = false; 


function Title() {
  return (  
    <>
    <div className={style? "arcadeBackground": "entranceBackground"}>
      <h1 className={style? "titleName": "nothing"}><i class="fa fa-long-arrow-left" aria-hidden="true"  onClick={()=> style = false}></i> online Game Night</h1>
    </div> 
      <div className={style? "nothing": "gameTease"}> 
        <div className='hangman'>
          HANGMAN
          {/* <img src='https://cdn2.momjunction.com/wp-content/uploads/2015/05/Hangman-Word-Game.jpg.webp' /> */}
        </div>
        <div className='hangman'>
          QUARTETT
        </div>
        <div className='hangman'>
          QUIZ
        </div>
      </div>
    </>
  )
}

export default Title;