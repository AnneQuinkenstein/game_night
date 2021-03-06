import React from "react";
import "./App.css";
import TitleFirst from "./components/TitleFirst";
import Title from "./components/Title";
import { Route, Switch } from "react-router-dom";
import HangmanContextComponent from "./contexts/HangmanContext";
import Hangman from "./components/Hangman/Hangman";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={TitleFirst} />
      <Route path="/title" component={Title} />
      <HangmanContextComponent>
        <Route path="/hangman" component={Hangman} />
        <Route path="/contact" component={Contact} />
      </HangmanContextComponent>
    </Switch>
  );
}

export default App;
