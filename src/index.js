import React from "react"; // dung React de tao component
import ReactDom from "react-dom";
// CSS
import "./index.css";
// props
import { arrayProps } from "./data/bookArray";
// components
import Book from "./components/Book";

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

// ReactDom.render nhan 2 doi so: components se duoc render va noi se render components
ReactDom.render(<BookList />, document.getElementById("root"));
