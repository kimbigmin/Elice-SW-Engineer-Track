import React, { useState, useContext, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

// useReducer
// Redux를 사용했다. -> dispatch : ???

// useState -> 상태관리라는 것을 할 수 있다.
// useReducer -> 상태관리를 할 수 있다. 조금 다른 방법으로....

// Counter 만들건데, useState 만 사용해서 만들어보고, useReducer 바꾸는 연습.

// reducer : (현재 상태, '액션' 객체)를 받아서 -> 새로운 상태를 반환
// action -> 업데이트를 위한 정보를 갖고 있다.

// const [state, dispatch] = useReducer(reducer, initialState);
// state : 앞으로 컴포넌트에서 사용할 상태 자체를 의미
// dispatch : '액션'을 발생시키는 함수

// useState -> useReducer
// useReducer : 장점, 단점
// 장점 : 코드의 가독성이 올라간다. + 다양한 케이스에 대해 대응이 가능하다.
// 단점 : 코드의 길이가 늘어난다...

// useState : 컴포넌트에서 관리하는 값이 적고, 구조가 단순한 경우에 사용하면 좋다.
// useReducer :  상태의 구조가 복잡할 때 사용하면 다소 유리하다.

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
