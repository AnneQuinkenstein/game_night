import React from 'react'; 

const Gif = (props)=> {
    return (
        <div className="Gif" onClick={() => props.handleClick(props.gifURL)}>
            <img src={props.gifURL} alt="gif from ghiphy" />
        </div>
    )
}

export default Gif; 