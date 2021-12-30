import "./App.css";

function Header(props) {
  console.log(props.onChangeMode);
  function onClickHandler(evt) {
    evt.preventDefault(); // 페이지 전환 X
    props.onChangeMode(); // 한번만 실행하면 다른 함수까지 모두 실행시켜준다.
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
  console.log(props.onChangeMode);

  function clickHandler(evt) {
    evt.preventDefault();
    props.onChangeMode();
  }
  console.log(props.data);
  // let lis = [];
  // for (let i = 0; i < props.data.length; i++) {
  //   let d = props.data[i];
  //   lis.push(
  //     <li key={d.id}>
  //       <a href={"/read/" + d.id} onClick={clickHandler}>
  //         {d.title}
  //       </a>
  //     </li>
  //   );
  // }

  // for => map 리팩토링
  let liTag = props.data.map((li, index) => {
    return (
      <li key={li.id}>
        <a href={"/read/" + li.id} onClick={clickHandler}>
          {li.title}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ol>{liTag}</ol>
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
  let topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];

  function onChangeModeHandler() {
    alert("change!");
  }

  function onChangeModeHandler2() {
    alert("change2!");
  }

  function onChangeNavModeHandler() {
    alert("changeNav!");
  }

  return (
    // div태그 대신 <> 익명태그도 사용 가능
    <div className="App">
      <Header title="Web" onChangeMode={onChangeModeHandler} />
      <Header title="Web" onChangeMode={onChangeModeHandler2} />
      <Nav data={topics} onChangeMode={onChangeNavModeHandler} />
      <Article title="Welcome" body="Hello react.js"></Article>
    </div>
  );
}

export default App;
