import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
// 다음 검색 시험 삼아서 해봤었다.
// promise, async await 사용

const REST_API_KEY = "11dbe3ebf136dba6ac6dd6a24dcc41a7";

function App() {
  const [result, setResult] = useState("");

  const [contents, contentsChange] = useState([]);
  useEffect(() => {
    // ...실제로 검색 API를 실행하고, 결과를 확인한다.
    axios
      .get("https://dapi.kakao.com/v2/search/image", {
        params: {
          query: "엘리스 SW 엔지니어 트랙",
        },
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      })
      .then((res) => {
        setResult(res.status);
        contentsChange(res.data.documents);
      });
  });

  return (
    <div className="App">
      <h4>HTTP 상태 코드</h4>
      <div>{result}</div>
      {contents.map((dt) => {
        return (
          <div>
            {/* <div dangerouslySetInnerHTML={{ __html: dt.title }}></div> */}
            <img src={dt.thumbnail_url} />
            <div>{dt.datetime}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
