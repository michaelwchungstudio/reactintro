// React (v. 16.8.6)- Getting Started

// React Library - for building components
// ReactDOM Library - for connecting components to the DOM

// Example component:
function Person(props) {
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

// Rendering the example component:
// Render the Person component in the div with id:p1
ReactDOM.render(<Person name='Michael' age='26'/>, document.querySelector('#p1');
ReactDOM.render(<Person name='Caroline' age='24'/>, document.querySelector('#p2');
