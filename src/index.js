import React from "react"; // dung React de tao component
import ReactDom from "react-dom";
import "./index.css";

// props
let arrayProps = [
  {
    id: 1,
    title: "Cho tôi xin 1 vé đi tuổi thơ",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsw42tu1bA77ZgL5C-4CgbepR9P4GJXIe5AfSvRRqEd4vadNyGPgJc9wlJyvgsEIhy9tdjtk&usqp=CAc",
  },
  {
    id: 2,
    title: "Tuổi thơ dữ dội",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibrfM88lJOApGB4TqTdYa4EequOT632b0dw&usqp=CAU",
  },
];

// function co ten ham ma chu cai dau duoc viet hoa de chi dinh do la functional component
function BookList() {
  return (
    <section className="book-list">
      {arrayProps.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

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

// ReactDom.render nhan 2 doi so: components se duoc render va noi se render components
ReactDom.render(<BookList />, document.getElementById("root"));
