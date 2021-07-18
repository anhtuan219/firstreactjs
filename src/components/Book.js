import React from "react";

const Book = (props) => {
  const { title, imageSrc } = props;
  const clickHandler = () => {
    alert("You just click the button");
  };
  const complexClickHandler = (title) => {
    alert("Book's title is " + title);
  };
  return (
    <article className="book-item">
      <p style={{ fontSize: "1.5rem" }}>This is a book</p>
      <h4>{title}</h4>
      <img src={imageSrc} alt="Image of Book" />
      <br />
      <button className="btn-click" type="button" onClick={clickHandler}>
        Click me
      </button>
      <br />
      <button
        className="btn-click"
        type="button"
        onClick={() => complexClickHandler(title)}
      >
        Show book's title
      </button>
    </article>
  );
};

export default Book;
