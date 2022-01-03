import "./App.css";
import { useState } from "react";

function Header(props) {
  console.log(props.onChangeMode);
  function onClickHandler(evt) {
    evt.preventDefault();
    props.onChangeMode("WELCOME");
  }
  return (
    <header>
      <h1>
        <a href="index.html" onClick={onClickHandler}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  let lis = [];
  function clickHandler(evt) {
    evt.preventDefault();
    props.onChangeMode("READ");
  }
  for (let i = 0; i < props.data.length; i = i + 1) {
    let d = props.data[i];
    lis.push(
      <li key={d.id}>
        <a href={"/read/" + d.id} onClick={clickHandler}>
          {d.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  // let _mode = useState("WELCOME");
  // let mode = _mode[0];
  // let setMode = _mode[1];
  // 위 내용과 같다.
  const [mode, setMode] = useState("WELCOME");

  let topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];
  function ChangeModeHandler(_mode, _id) {
    setMode(_mode);
    setMode(_id);
  }

  let articleTag;

  if (mode === "WELCOME") {
    articleTag = <Article title="Welcome" body="Hello, React!" />;
  } else {
    articleTag = <Article title="READ" body="Hello, READ!" />;
  }

  return (
    <>
      <Header title="WEB" onChangeMode={ChangeModeHandler} />
      <Nav data={topics} onChangeMode={ChangeModeHandler} />
      {articleTag}
      <Control onChangeMode={ChangeModeHandler} />
    </>
  );
}

function Control(props) {
  function ClickHandler(evt) {
    evt.preventDefault();
    props.onChangeMode("CREATE");
  }

  return (
    <ul>
      <li>
        <button>
          <a href="/create" onClick={ClickHandler}>
            create
          </a>
        </button>
      </li>
    </ul>
  );
}

export default App;
