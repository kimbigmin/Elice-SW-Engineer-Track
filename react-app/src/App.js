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

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="1.html">html</a>
        </li>
        <li>
          <a href="2.html">css</a>
        </li>
        <li>
          <a href="3.html">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article(props) {
  console.log(props);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  return (
    // div태그 대신 <> 익명태그도 사용 가능
    <div className="App">
      <Header title="Web"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello react.js"></Article>
    </div>
  );
}

export default App;
