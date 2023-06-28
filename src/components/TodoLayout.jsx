import React from 'react'
import CardList from "./CardList";
import * as Styled from '../styled'


function TodoLayout({title, cards, deleteCard, markAsDone, isDone}) {
  return (
    <div>
      <h2>{title}</h2>
      <Styled.CardLists>
        {cards.map((card) => {
          if (card.done === isDone) {
            return (
              <CardList
                key={card.id}
                card={card}
                deleteCard={deleteCard}
                markAsDone={markAsDone}
              />
            );
          }
          return null;
        })}
      </Styled.CardLists>
    </div>
  );
};

export default TodoLayout