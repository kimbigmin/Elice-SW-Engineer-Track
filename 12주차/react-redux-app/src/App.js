import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <h1>Root</h1>
      {value}
      <div id="container">
        <Left1 number={value}></Left1>
        <Right1
          onIncrease={() => {
            setValue(value + 1);
          }}
        ></Right1>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h2>Left1 : {props.number}</h2>
      <Left2 number={props.number}></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h3>Left2 : {props.number}</h3>
      <Left3 number={props.number}></Left3>
    </div>
  );
}
function Left3(props) {
  return (
    <div>
      <h4>Left3 : {props.number}</h4>
      <Left4 number={props.number}></Left4>
    </div>
  );
}
function Left4(props) {
  return (
    <div>
      <h5>Left4 : {props.number}</h5>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h2>Right1</h2>
      <Right2
        onIncrease={() => {
          props.onIncrease();
        }}
      ></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h3>Right2</h3>
      <Right3
        onIncrease={() => {
          props.onIncrease();
        }}
      ></Right3>
    </div>
  );
}
function Right3(props) {
  return (
    <div>
      <h4>Right3</h4>
      <Right4
        onIncrease={() => {
          props.onIncrease();
        }}
      ></Right4>
    </div>
  );
}
function Right4(props) {
  return (
    <div>
      <h5>Right4</h5>
      <input
        type="button"
        value="+"
        onClick={() => {
          props.onIncrease();
        }}
      ></input>
    </div>
  );
}

export default App;
