import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a href="index.html">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  let lis = [];

  for (let i = 0; i < props.data.length; i++) {
    let d = props.data[i];
    lis.push(
      <li key={d.id}>
        <a href={"/read/" + d.id}>{d.title}</a>
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
  let topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];

  return (
    // div태그 대신 <> 익명태그도 사용 가능
    <div className="App">
      <Header title="Web"></Header>
      <Nav data={topics} />
      <Article title="Welcome" body="Hello react.js"></Article>
    </div>
  );
}

export default App;
