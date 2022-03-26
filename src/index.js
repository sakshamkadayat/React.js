import ReactDOM from 'react-dom';
import React  from 'react';


// ReactDOM.render(
//   <h1>This is Testing</h1>,
//   document.getElementById('root')
// );



// Introducing JSX//

// const name= 'IT.Chandra';
// const element= <h1>Hello , {name}</h1>

// ReactDOM.render(element,document.getElementById('root'))


//Rendering an Element into the DOM//
// function vedo (){
// const element =(<h1>Hello veds</h1>);
// ReactDOM.render(element,document.getElementById('root'))
// }
// setInterval(vedo,1000);


//Components and Props//

function Car(props)
 {

    return (<h2>I am a { props.name }</h2>);
}
  
var myelement = <Car name="Saksham" />;
  
ReactDOM.render(myelement, document.getElementById('root'));