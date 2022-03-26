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


//Rendering a Component//

// function Car(props)
//  {

//     return (<h2>I am a { props.name }</h2>);
// }
  
// var element = <Car name="Saksham" />;
  
// ReactDOM.render(element, document.getElementById('root'));



//Chandra component that renders Sus many times//


function Sus(props) {
    return <h1>Hello, {props.name}</h1>;
  }

function Chandra()
{
return (
    <div>
    <Sus name="IT.Chandra"/>;
    <Sus name="Dr.chandra"/>;
    <Sus name="plumber.chandra"/>;
    <Sus name="Er. Chandra"/>;
    </div>
    );

}
ReactDOM.render(
    <Chandra/>,document.getElementById('root')
    
    );

