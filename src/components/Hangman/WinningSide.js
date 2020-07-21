import React from 'react';

const WinningSide = (props) => {
    return(
       <div> 
           <img src=`https://image.tmdb.org/t/p/original${props.movieData.backdrop_path}` alt="pic to moviepicture"/>
       </div> 
    )
}

export default WinningSide; 