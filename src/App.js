import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";

// 카드 컨포넌트
function TodoCard({ card, index, deleteCard, markAsDone }) {
  return (
    <Card key={index} className="card-box working-card">
      <Card.Body>
        <div>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
        <div className="cards-button">
          <button className="card-button1" onClick={() => deleteCard(index)}>
            삭제하기
          </button>
          {card.done ? (
            <button className="card-button2" onClick={() => markAsDone(index)}>
              취소
            </button>
          ) : (
            <button className="card-button2" onClick={() => markAsDone(index)}>
              완료
            </button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

function App() {
  let [todo, setTodo] = useState("");
  let [cards, setCards] = useState([]);
  let [content, setContent] = useState("");

  const addCard = () => {
    setCards([...cards, { title: todo, done: false, content: content }]);
    setTodo("");
    setContent("");
  };

  const markAsDone = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].done = !updatedCards[index].done;
    setCards(updatedCards);
  };

  const deleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

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
          <input
            className="titleInput1"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <label className="labelInput2">내용</label>
          <input
            className="titleInput2"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="titleButton" onClick={addCard}>
          추가하기
        </button>
      </div>

      {/* Working 영역 */}
      <div className="working">
        <h2 class="working-title">Working...🔥</h2>
        <div className="card-list">
          {cards.map((card, index) => {
            if (!card.done) {
              return (
                <TodoCard
                  key={index}
                  card={card}
                  index={index}
                  deleteCard={deleteCard}
                  markAsDone={markAsDone}
                />
              );
            }
          })}
        </div>
      </div>

      {/* Done 영역 */}
      <div className="done">
        <h2>Done...🎉</h2>
        <div className="card-list">
          {cards.map(
            (card, index) =>
              card.done && (
                <TodoCard
                  key={index}
                  card={card}
                  index={index}
                  deleteCard={deleteCard}
                  markAsDone={markAsDone}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
