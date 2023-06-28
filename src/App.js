import "./App.css";
import React from "react";
import TodoLayout from "./components/TodoLayout";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todo,
    setTodo,
    content,
    setContent,
    addCard,
    markAsDone,
    deleteCard,
    cards,
  } = useTodo();

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

      {/* ------------------------------------------------------------------------------ */}

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

      {/* ------------------------------------------------------------------------------ */}

      {/* Working 영역 */}
      <TodoLayout
        title="Working...🔥"
        cards={cards}
        deleteCard={deleteCard}
        markAsDone={markAsDone}
        isDone={false}
      />

      {/* ------------------------------------------------------------------------------ */}

      {/* Done 영역 */}
      <TodoLayout
        title="Done...🎉"
        cards={cards}
        deleteCard={deleteCard}
        markAsDone={markAsDone}
        isDone={true}
      />
    </div>
  );
}

export default App;
