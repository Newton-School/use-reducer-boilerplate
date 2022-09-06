import React, { useState, useReducer } from "react";
import "../styles/App.css";

const reducer = (state, action) => {

};

const initialState = {
  counter: 0,
  mode: true,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = (e) => {
  }
  
  const buttonHandler = e => {
  }

  return (
    <div id="main">
      <h1>Counter Changer with Mode</h1>
      <div className="box">{state.counter}</div>
      <button onClick={buttonHandler} id='change'>Change</button>
      <br/>
      <div>
        <label htmlFor="inc">Increment</label>
        <input type="radio" name="mode" id="inc" defaultChecked onClick={changeHandler}></input>
      </div>
      <div>
        <label htmlFor="dec">Decrement</label>
        <input type="radio" name="mode" id="dec" onClick={changeHandler}></input>
      </div>
    </div>
  );
};

export default App;
