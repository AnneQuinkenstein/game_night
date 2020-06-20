import React from 'react';
import background from '../arcadeEntrance.jpg';

const style = false; 


function Title() {
  return (  
    <div className='title'>
      <div className={style? "arcadePic": "entrancePic"}>
        <img src={background} />
      </div>
      <h1 className={style? "titleName": "nothing"}><i class="fa fa-long-arrow-left" aria-hidden="true"  onClick={()=> style = false}></i>  online Game Night</h1>
      <div className={style? "nothing": "gameTease"}> 
        <div className='hangman'>
          <img src='http://chupacdn.s3.amazonaws.com/catalog/product/cache/1/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/h/a/hangman-game-with-animations-9828_imgs_9828.png' />
        </div>
        <div className='hangman'>
          <img src='http://chupacdn.s3.amazonaws.com/catalog/product/cache/1/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/h/a/hangman-game-with-animations-9828_imgs_9828.png' />
        </div>
        <div className='hangman'>
          <img src='http://chupacdn.s3.amazonaws.com/catalog/product/cache/1/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/h/a/hangman-game-with-animations-9828_imgs_9828.png' />
        </div>
      </div>
    </div>
  )
}

export default Title;