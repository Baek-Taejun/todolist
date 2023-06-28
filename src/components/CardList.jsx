import React from "react";
import Card from "react-bootstrap/Card";
import * as Styled from '../styled'
import {Theme} from '../theme'

// 카드 컴포넌트
function CardList({ card, deleteCard, markAsDone }) {
  const { id, title, content, done } = card;

  return (
    <Card key={id} className="card-box working-card">
      <Card.Body>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="cards-button">
          <Styled.CardButton 
            color={Theme.color.red} 
            onClick={() => deleteCard(id)}
            children="삭제하기"/>
          <Styled.CardButton 
            color={Theme.color.green} 
            onClick={() => markAsDone(id)}
            children={done ? "취소" : "완료"}/>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardList;
