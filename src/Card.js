import React from "react";

function Cards() {
  return (
    <Card className="card-box">
      <Card.Body>
        <div className="card-text">
          <h2>리액트 공부하기</h2>
          <p>리액트 기초를 공부해 봅시다.</p>
        </div>
        <div className="cards-button">
          <button className="card-button1">삭제하기</button>
          <button className="card-button2">완료</button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
