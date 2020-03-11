import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    inputLength: 0,
  }

  changeHandler = (event) => {
    this.setState({
      inputLength: event.target.value.length,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>[ X ] - Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>[ X ] - Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>[ X ] - Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>[  ] - Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>[  ] - Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>[  ] - When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
        </div>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div className="content-card field-group">
          <label>Input Field</label>
          <input onChange={(event) => this.changeHandler(event)} />
        </div>
        <div className='content-card'>
          <p>Input Length: {this.state.inputLength}</p>
        </div>
		<ValidationComponent textLenght={this.state.inputLength} />
      </div>
    );
  }
}

export default App;
