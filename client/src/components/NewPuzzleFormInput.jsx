import React from 'react';

function NewPuzzleFormInput(props) {
  return (
    <div className="NewPuzzleFormInput">
        <label htmlFor={props.id}>{props.title}</label>
        <input id={props.id} type={props.type} value={props.state} onChange={(e) => props.type==="number" ? props.setState(e.target.valueAsNumber) : props.setState(e.target.value)}/>
        {props.hasError ? <div className="ErrorMessage">{props.errorMessage}</div> : <div></div>}
    </div>
  );
};

export default NewPuzzleFormInput;