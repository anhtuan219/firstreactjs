import React from 'react'; // dung React de tao component
import ReactDom from 'react-dom';

// function co ten ham ma chu cai dau duoc viet hoa de chi dinh do la functional component
function Greeting(){
    return <h2>This is first component</h2>
}

// ReactDom.render nhan 2 doi so: components se duoc render va noi se render components 
ReactDom.render(<Greeting />, document.getElementById('root'));
//ReactDom.render(<Greeting></Greeting>, document.getElementById('root'));