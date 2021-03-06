import React, { useContext } from "react";
import { HangmanContext } from "../../contexts/HangmanContext";

const DisplayWord = () => {
  const { answer } = useContext(HangmanContext);

  return <div>{answer}</div>;
};

export default DisplayWord;
