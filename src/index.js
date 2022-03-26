import ReactDOM from 'react-dom';
import React  from 'react';
// ReactDOM.render(
//   <h1>This is Testing</h1>,
//   document.getElementById('root')
// );

//Introducing JSX
const name= 'IT.Chandra';
const element= <h1>Hello , {name}</h1>

ReactDOM.render(element,document.getElementById('root'))