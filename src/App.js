import React from 'react';
import './App.css';
import Title from './components/Title'
import HangmanWinner from './components/Hangman/HangmanWinner/HangmanWinner';
import { Route, Switch } from 'react-router-dom';
import HangmanContextComponent from './contexts/HangmanContext';
import HangmanFirst from './components/Hangman/HangmanFirst';
import HangmanSecond from './components/Hangman/HangmanSecond'; 
import Contact from './components/Contact/Contact';


function App() {
  return (

      <Switch>
        <Route exact path='/' component={Title} />
        <HangmanContextComponent>
        <Route path='/hangman' component={HangmanFirst} />
        <Route path='/hangmangame' component={HangmanSecond} />
        <Route path='/hangmanwinner' component={HangmanWinner} />
        <Route path='/contact' component={Contact} />
        </HangmanContextComponent>
      </Switch>
  )
}

export default App;
