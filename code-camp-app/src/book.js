import React from "react";

const Book = ({ book }) => {
  const clickHandler = (e, author) => {
    console.log(e.target);
    alert(author);
  };
  return (
    <article
      onMouseOver={() => {
        console.log("tu si");
      }}
    >
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button
        type="button"
        onClick={(event) => clickHandler(event, book.author)}
      >
        Click
      </button>
    </article>
  );
};

export default Book;
