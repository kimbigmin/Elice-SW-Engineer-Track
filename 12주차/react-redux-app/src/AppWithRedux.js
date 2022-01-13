import { useState } from "react";
import "./App.css";
import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";

function reducer(oldState, action) {
  if (oldState === undefined) {
    return {
      number: 0,
    };
  }

  const newState = { ...oldState };
  if (action.type === "INCREASE") {
    newState.number++;
  }
  return newState;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Root</h1>
        <div id="container">
          <Left1></Left1>
          <Right1></Right1>
        </div>
      </div>
    </Provider>
  );
}

function Left1() {
  return (
    <div>
      <h2>Left1</h2>
      <Left2></Left2>
    </div>
  );
}
function Left2() {
  return (
    <div>
      <h3>Left2</h3>
      <Left3></Left3>
    </div>
  );
}
function Left3() {
  return (
    <div>
      <h4>Left3</h4>
      <Left4></Left4>
    </div>
  );
}
function Left4(props) {
  function selectorHandler(state) {
    return state.number;
  }
  const number = useSelector(selectorHandler);

  return (
    <div>
      <h5>Left4</h5>
      {number}
    </div>
  );
}

function Right1() {
  return (
    <div>
      <h2>Right1</h2>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h3>Right2</h3>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  return (
    <div>
      <h4>Right3</h4>
      <Right4></Right4>
    </div>
  );
}
function Right4() {
  const dispatch = useDispatch();
  return (
    <div>
      <h5>Right4</h5>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      ></input>
    </div>
  );
}

export default App;
