import React from "react"; // dung React de tao component
import ReactDom from "react-dom";
import "./index.css";

// props
let firstBook = {
  title: "Cho tôi xin 1 vé đi tuổi thơ",
  imageSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsw42tu1bA77ZgL5C-4CgbepR9P4GJXIe5AfSvRRqEd4vadNyGPgJc9wlJyvgsEIhy9tdjtk&usqp=CAc",
};
let secondBook = {
  title: "Tuổi thơ dữ dội",
  imageSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibrfM88lJOApGB4TqTdYa4EequOT632b0dw&usqp=CAU",
};

// function co ten ham ma chu cai dau duoc viet hoa de chi dinh do la functional component
function BookList() {
  return (
    <section className="book-list">
      <Book title={firstBook.title} imageSrc={firstBook.imageSrc}>
        <p>
          Data between opening and closing tag of component can be accessed by
          the children of props, the name 'children' is compulsory and cannot be
          replaced by any other name
        </p>
      </Book>
      <Book title={secondBook.title} imageSrc={secondBook.imageSrc} />
    </section>
  );
}

const Book = (props) => {
  const { title, imageSrc, children } = props;
  return (
    <article className="book-item">
      <p style={{ fontSize: "1.5rem" }}>This is a book</p>
      <h4>{title}</h4>
      <img src={imageSrc} alt="Image of Book" />
      {children}
    </article>
  );
};

// ReactDom.render nhan 2 doi so: components se duoc render va noi se render components
ReactDom.render(<BookList />, document.getElementById("root"));
