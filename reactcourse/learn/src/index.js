import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(){
  return <h1>Hello, welcome to the learning platform!</h1>;
}

ReactDOM.render(<Greeting />, document.getElementById('root'));