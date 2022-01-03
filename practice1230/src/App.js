import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import { useState } from "react";

function Info(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
    </div>
  );
}

function App() {
  const [data, dataChange] = useState([
    { title: "안녕", date: "2021년 2월 4일" },
    { title: "잘가", date: "2021년 3월 4일" },
    { title: "졸려", date: "2021년 4월 4일" },
    { title: "심심해", date: "2021년 5월 4일" },
  ]);

  // Q1. map을 사용해서 4개의 컴포넌트 만들어보기

  // Q2. 데이터를 입력 받는 <input> 만들기 -> 이 값이 어떤 state에 저장이 되어야 한다.
  // const [input, inputChange] = ~~~
  // 1. 상태 정의하고, 2. input 만들어서 값 수정될 때 마다 state 갱신

  // Q3. 데이터를 추가하려면? -> data라는 state에 새로운 값을 넣어야 한다.
  // TODO: 1. 버튼을 하나 만들자. 2. 버튼을 눌렀을 때, title은 사용자가 입력한 값으로, date는 날짜로 추가 되는 것 까지 확인하기

  // Q4. 플래그
  // 1. 버튼을 하나 만든다. 2. 버튼을 눌렀을 때, 위쪽 데이터가 전부 안 보이게 함. 3. 다시 버튼을 눌렀을 때, 데이터가 다시 보이게 함. 4. 무한 반복

  const [input, inputChange] = useState("");
  const [enable, enableChange] = useState(1);

  return (
    <div className="App">
      {enable === 1
        ? data.map((el, idx) => (
            <Info key={idx} title={el.title} date={el.date} />
          ))
        : null}
      <input
        onChange={(e) => {
          inputChange(e.target.value);
        }}
        type="text"
      />
      <button
        onKeyPress={(e) => {
          const today = new Date();
          let year = today.getFullYear();
          let month = today.getMonth() + 1;
          let day = today.getDate();

          if (e.key === "Enter") {
            dataChange([
              ...data,
              { title: input, date: `${year}년 ${month}월 ${day}일` },
            ]);
          }
        }}
      >
        등록
      </button>
      <button
        onClick={() => {
          enableChange(1 - enable);
        }}
      >
        화면 보이기/숨기기
      </button>
    </div>
  );
}

export default App;
