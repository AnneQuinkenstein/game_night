import React from 'react';
import { Component } from 'react';

class ExplainHangman extends Component {

    render() {
        return (
            <>
                <div className='explain'><span>Guess</span>the Movie Title</div>
                <div className='explain'>Letter<span>by Letter</span></div>
                <div className='explain'>No more than 5 <span> wrong guesses</span></div>
                <div className='explain'><span>Start by</span>typing with your keyboard</div>
                <div className='explain'><span>Letter</span>by Letter</div>
                <div className='explain'>Wrong guess<span>will lead to</span></div>
                <div className='explain'>reavel a <span> picture</span></div>
                <div className='explain'><span>which might or might not</span> be from the movie</div>
            </>
        )
    }

}

export default ExplainHangman;




// <div className="explainHangman">
            //     <h1 className="explain">GUESS THE MOVIE TITLE &nbsp;&nbsp; LETTER BY LETTER &nbsp;&nbsp; NO MORE THAN 5 WRONG GUESSES </h1> 
            //     <p> Start by just typing a letter with your keyboard. If you guess wrong, you will get a glance of an image associated with the movie title & the wrong letter is displayed at the bottom.</p>
            // </div>