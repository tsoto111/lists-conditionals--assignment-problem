import React, { Component } from 'react';
import './App.css';
import Validation from './Components/ValidationComponent/Validation';
import Char from './Components/CharComponent/Char';

class App extends Component {

  state = {
	userInput: '',
  }

  inputChangeHandler = (event) => {
    this.setState({
	  userInput: event.target.value,
    });
  }

  deleteCharHandler = (index) => {
	const text = this.state.userInput.split('');
	text.splice(index,1);
	const updatedText = text.join('');
	this.setState({userInput: updatedText});
  }

  render() {

	const charList = this.state.userInput.split('').map((ch,index) => {
		return <Char key={index} character={ch} clicked={() => this.deleteCharHandler(index)} />
	})

    return (
      <div className="App">
        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>[ X ] - Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>[ X ] - Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>[ X ] - Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>[ X ] - Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>[ X ] - Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>[ X ] - When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
        </div>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
		<hr/>
        <input onChange={this.inputChangeHandler} value={this.state.userInput} />
		<p>{this.state.userInput}</p>
		<Validation inputLength={this.state.userInput.length}/>
		{charList}
      </div>
    );
  }
}

export default App;
