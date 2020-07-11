import React from 'react';
import Letter from '../Letter';

const DisplayWord = (props) => {
    console.log(props);

    let firstLine = [];
    const numFirstLine = 12;
    let greenSpacesFirst = [];



    let thirdLine = [];
    const munThirdLine = 14;

    let fourthLine = [];
    const numFourthLIne = 12;

    const addSecondLine = () => {
        let secondLine = [];
        const numSecondLine = 14;
        let greenSpacesSecond = [];

        if (props.sentence.length <= numSecondLine) {
            let numGreenSpaces = (numSecondLine - props.sentence.length) / 2
            for (let i = 0; i < numGreenSpaces; i++) {
                greenSpacesSecond.push(' ');
            }
            secondLine = [...greenSpacesSecond, ...props.sentence, ...greenSpacesSecond];
            console.log(secondLine);

            return secondLine;
        }
    }

    const second = addSecondLine();

    return (
        <div className="DisplayWord">
            {second.map((space, index) => <Letter space={space} key={index} guessedLetters={props.guessedLetters} />)}
        </div>
    )
}

export default DisplayWord;


