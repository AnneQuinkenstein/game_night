import React, { useState } from 'react';



const ChooseLanguage = (props) => {
      
    return (
        <select value={props.choosenLang} onChange={props.handleChooseLang}>
            {props.options.map(opt => <option> {opt} </option>)}
        </select >
    )
}

export default ChooseLanguage;