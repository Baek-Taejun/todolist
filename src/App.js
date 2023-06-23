import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function App() {
  let [todo, setTodo] = useState("제목");

  return (
    <div className="App">
      {/* 나브박스 */}
      <div className="box-nav">
        <div className="nav-text1">
          <h4>My Todo List</h4>
        </div>
        <div className="nav-text2">
          <h4>React</h4>
        </div>
      </div>
      {/* 제목,내용박스 */}
      <div className="list">
        <div className="input-container">
          <label className="labelInput1">제목</label>
          <input className="titleInput1" type="text" />
          <label className="labelInput2">내용</label>
          <input className="titleInput2" type="text" />
        </div>
        <button className="titleButton">추가하기</button>
      </div>
      <Cards></Cards>
    </div>
  );
}

function Cards() {
  return (
    <Card className="card-box">
      <Card.Body>
        <div>
          <h4>리액트 공부하기</h4>
          <p>리액트 기초를 공부해 봅시다.</p>
        </div>
        <div>
          <button>삭제하기</button>
          <button>완료</button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default App;
