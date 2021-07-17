import React from "react"; // dung React de tao component
import ReactDom from "react-dom";

// function co ten ham ma chu cai dau duoc viet hoa de chi dinh do la functional component
function Greeting() {
  return <h2>This is functional component</h2>;
}

const Hi = () => {
  // ham React.createElement nhan 3 doi so: element tra ve, props, children (cai se duoc render trong element tra ve)
  return React.createElement("h1", {}, "This is also a functional component");
  //return React.createElement("div", {}, React.createElement("h1", {}, "This is also a functional component"));
};

// ReactDom.render nhan 2 doi so: components se duoc render va noi se render components
ReactDom.render(
  <>
    <Greeting /> <Hi />
  </>,
  document.getElementById("root")
);
//ReactDom.render(<Greeting></Greeting>, document.getElementById('root'));
