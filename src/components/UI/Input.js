import React from 'react';
import './input.css';

function Input(props) {
  return (
    <div className="">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input