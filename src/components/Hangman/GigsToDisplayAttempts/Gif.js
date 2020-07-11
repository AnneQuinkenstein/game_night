import React from 'react'; 

const Gif = (props)=> {
    return (
        <div className="Gif">
            <img className={(props.falseGuesses <= props.index) ? "blurr" : "gif"} src={props.gifURL} alt="gif from ghiphy" />
        </div>
    )
}

export default Gif; 