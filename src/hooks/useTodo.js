import { useState } from "react";

export const useTodo = () => {
  const [todo, setTodo] = useState("");
  const [cards, setCards] = useState([]);
  const [content, setContent] = useState("");
  const [nextId, setNextId] = useState(1);

  const addCard = () => {
    const newCard = {
      id: nextId,
      title: todo,
      done: false,
      content: content,
    };

    setCards([...cards, newCard]);
    setTodo("");
    setContent("");
    setNextId(nextId + 1);
  };

  const markAsDone = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, done: !card.done };
      }
      return card;
    });

    setCards(updatedCards);
  };

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return {
    todo,
    setTodo,
    content,
    setContent,
    addCard,
    markAsDone,
    deleteCard,
    cards,
  };
};
