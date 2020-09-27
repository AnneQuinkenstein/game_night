import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("slide-right");

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
    setDirection("slide-left");
  };

  const slideRight = () => {
    setIndex((index + 1) % images.length);
    setDirection("slide-right");
  };

  const childFactory = (direction) => (child) =>
    React.cloneElement(child, {
      classNames: direction,
    });

  return (
    images.length > 0 && (
      <div className="image-slider">
        <button onClick={slideLeft} className="button left">&#11013;</button>
        <div className="image-wrapper">
          <TransitionGroup childFactory={childFactory(direction)}>
            <CSSTransition
              key={images[index]}
              timeout={1000}
              classNames={direction}
            >
              <img src={images[index]} alt="Movie Poster or Gif from Giphy" />
          
            </CSSTransition>
          </TransitionGroup>
        </div>
        <button onClick={slideRight} className="button right">&#10145;</button>
      </div>
    )
  );
}
