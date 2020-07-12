import React from 'react'; 

const Gif = (props)=> {
    console.log(props.wrongLetter);
    return (
        <div className="Gif">
            <img className={(props.falseGuesses <= props.index) ? "blurr" : "gif"} src={props.gifURL} alt="gif from ghiphy" />
            <div className='wrongLetter'>{props.wrongLetter}</div>
        </div>
    )
}

export default Gif; 