//import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// const App = (props) => {
//     //const headingTag = "This is a variable";
//     const headingTag = props.head;
//     return (
//     <div>
//         <h1>{headingTag}</h1>
//         <h2>{props.sub}</h2>
//         <label className="label" htmlFor="name">Enter name: </label>
//         <input id="name" type="text" />
//         <button style={{backgroundColor:'blue', color:'white' }}>Click Here</button>


//     </div>
//     );
// };
//class App extends React.Component{
//  render(){
//      const headingTag = "hello";
//      return(
//         <div>
//             <h1>{headingTag}</h1>
//             <h2>{this.props.sub}</h2>
//             <label className="label" htmlFor="name">Enter name: </label>
//             <input id="name" type="text" />
//             <button style={{backgroundColor:'blue', color:'white' }}>Click Here</button>
//         </div>
//      );
//  }
   
//}
// class component with method component inside
//  class App extends React.Component{
//     //const heading = "this is a test string";
//     app1 = () => {
//        console.log('helloa');
//     }
//     render(){
//         return <button onClick={this.app1}>Click Me</button>;
//     }
// }


// class Foo extends React.Component {
//     // Note: this syntax is experimental and not standardized yet.
//     handleClick = () => {
//       console.log('Click happened');
//     }
//     render() {
//       return <button onClick={this.handleClick}>Click Me</button>;
//     }
//   }
const arrayData = [
    {
        id: 1,
        name: "shirin",
        city: "sylhet"
    },
    {
        id: 2,
        name: "akter",
        city: "dhaka"
    }
];
// const App = () => {
//     // const headText = "hello";
//     let indents =  [];
//     for( let i = 0; i < arrayData.length; i++){
//        indents.push(arrayData[i].name);
//        indents.push(arrayData[i].city);
//     }
//     console.log(indents);
//     return(
//         <div>
//             <ul>
              
              
//             </ul>
//         </div>
        
//     );
// }



var arrData = [
    {
        name: 'Shirin',
        city: 'Sylhet'

    },
    {
        name: 'Akter',
        city: 'Dhaka'

    }
  ];

  const fnData = () => {
      return arrData.map((data) =>
      <div>
        <li key={data.id}>{data.name}</li>
        <li key={data.id}>{data.city}</li>
      </div>
      );
  }
  
  const Navi = () => {  
      return (
        <div className="navigation">
          <ul>
            {fnData()}
          </ul>
        </div>
      );
    }

// Take the react component and print on the screen

// ReactDOM.render(<App head="This is JSX syntax" sub="this is sub" />, document.querySelector('#root'));
ReactDOM.render(<Navi />, document.querySelector("#root"));