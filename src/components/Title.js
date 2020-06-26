import React, { Component } from 'react';
import background from '../arcadeEntrance.jpg';
import pacghost from '../blinky.png';


class Title extends Component {
  constructor(props){
    super(props); 
    this.state={
      style: true
    };
  }

  render() {
    return (  
      <>
      <div className={this.style? "arcadeBackground": "entranceBackground"}>
        <h1 className={this.style? "titleName": "nothing"}><i class="fa fa-long-arrow-left" aria-hidden="true"  onClick={()=> this.setState({style: true})}></i> online Game Night</h1>
      </div> 
        <div className={this.style? "nothing": "gameTease"}> 
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
}

export default Title;