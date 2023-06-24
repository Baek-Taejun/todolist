<<<<<<< HEAD
function Son(props) {
  //상속받기 위해서 자식인 Son이 props를 넣음.
  console.log(props);
  return (
    <div>
      나는 {props.grandFatherName}의손자{props.motherName}의 딸이에요!
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 73c0007 (finish)
=======
>>>>>>> parent of 73c0007 (finish)
=======
>>>>>>> parent of 73c0007 (finish)
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function Mother(props) {
  //상속을 받으려는 자식은 props를 넣어줘야 한다. 그럼저기 16번째줄에 있는게 상속됨.
  console.log(props);
  const name = "강수야";
  return <Son motherName={name} grandFatherName={props.grandFatherName} />; //Son한테는 이걸 상속해준단 뜻.
}

function GrandFather() {
  const name = "강병기";
  return <Mother grandFatherName={name} />;
}

export default GrandFather; //여기는 최상위 컴포넌트와 명이 같아야 한다.
=======
=======
>>>>>>> parent of 73c0007 (finish)
=======
>>>>>>> parent of 73c0007 (finish)
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
>>>>>>> parent of 73c0007 (finish)
