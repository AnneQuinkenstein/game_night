import React, { Component } from 'react';
import background from '../arcadeEntrance.jpg';
import pacghost from '../blinky.png';
import axios from 'axios';


class Title extends Component {
  constructor(props){
    super(props); 
    this.state={
      style: true,
      joke: null,
     };
  }

  handleClick = (event) => {
    const newStyle = !this.state.style;
    this.setState({ style: newStyle }); 
  }

  changeJoke = (event) => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
    .then(response => response.data)
    .then(data => {
      this.setState({
        joke: data.joke,
      });
    });
  }

  

  render() {
    return (  
      <>
      <div className={this.state.style? "arcadeBackground": "entranceBackground"}>
        <h1 className={this.state.style? "titleName": "nothing"}><i class="fa fa-long-arrow-left" aria-hidden="true"  onClick={this.handleClick}></i> <span onClick={this.handleClick}>online Game Night</span></h1>
        <h1 className={this.state.style? "nothing": "jokes"} onMouseEnter={this.changeJoke}> <span onMouseEnter={this.changeJoke}>What</span> <span onMouseEnter={this.changeJoke}> is so </span> <span onMouseEnter={this.changeJoke}>funny</span> about <span onMouseEnter={this.changeJoke}>... </span></h1>
        <p className={this.state.style? "nothing": "jokes"}>{this.state.joke}</p>
      </div> 
        <div className={this.state.style? "nothing": "gameTease"}> 
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