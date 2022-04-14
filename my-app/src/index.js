import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const fruit = "banana";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fruit: props.name};
  }
  render() {
    return <h2> {this.state.fruit} good </h2>;
  }
}

let greeting = <Welcome name="Jesse"/> ;
let root = ReactDOM.createRoot(document.getElementById('root'));
let food = <Fruit name="kiwi"/>;


let button = <button className="welcome" onClick={() => console.log('click')}>
                Welcome
             </button>
root.render([greeting,button,food]);
