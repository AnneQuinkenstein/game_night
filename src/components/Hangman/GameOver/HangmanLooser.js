import React, { useContext } from "react";
import HangmanLooseMenu from "./HangmanLooseMenu";
import { HangmanContext } from "../../../contexts/HangmanContext";

const HangmanLooser = () => {
  const { movieData } = useContext(HangmanContext);

  return (
    <div className="hangmanLooser page">
      <HangmanLooseMenu />
      <div className="looseImage">
        <img
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="MoviePoster"
        />
      </div>
    </div>
  );
};

export default HangmanLooser;
