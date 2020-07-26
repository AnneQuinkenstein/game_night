import React from 'react';
import './App.css';
import Title from './components/Title'
import Hangman from './components/Hangman/Hangman';
import HangmanWinner from './components/Hangman/HangmanWinner';
import { Route, Switch } from 'react-router-dom'; 


function App() {
    return(
      <Switch>
        <Route exact path='/' component={Title} />
        <Route path='/hangman' component={Hangman} />
        <Route path='/hangmanwinner' component={HangmanWinner} />
      </Switch> 
    )
}

export default App;
