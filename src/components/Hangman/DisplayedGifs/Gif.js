import React from 'react';

const Gif = (props) => {
    return (
        <>
            <div className={((props.falseGuesses - 1) === props.index) ? "Gifanimated" : "Gif"}>
                <img className={(props.falseGuesses <= props.index) ? "blurr" : "gif"} src={props.gifURL} alt="gif from ghiphy" />
                <div className='wrongLetter'>{props.wrongLetter}</div>
            </div>
            <div className='phone-wrongLetter'>{props.wrongLetter}</div>
        </>
    )
}

export default Gif; 