import React from 'react';
import background from '../arcadeEntrance.jpg';
import pacghost from '../blinky.png'

const style = false; 


function Title() {
  return (  
    <>
    <div className={style? "arcadeBackground": "entranceBackground"}>
      <h1 className={style? "titleName": "nothing"}><i class="fa fa-long-arrow-left" aria-hidden="true"  onClick={()=> style = false}></i> online Game Night</h1>
    </div> 
      <div className={style? "nothing": "gameTease"}> 
        <div className='hangman'>
          <img src={pacghost} /> 
          <div class="center">HANGMAN</div>
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
    </>
  )
}

export default Title;