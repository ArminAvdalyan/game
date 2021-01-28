import React, {Component} from "react";

import Home from './components/HomePage/HomePage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPick: "",
      compPick: "",
    }
    this.choiceFigure = this.choiceFigure.bind(this);
  }

  choiceFigure(e) {
    this.setState({
      myPick: e.target.dataset.id,
    })
  }

  choiceFigureForComp() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor((Math.random()*3))];
    this.setState({
      compPick: randomChoice,
    })
  }

  componentDidMount() {
    this.choiceFigureForComp();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home onclick={this.choiceFigure}/>
          <div>I picked: {this.state.myPick}</div>
          <div>Comp picked: {this.state.compPick}</div>
        </header>
      </div>
    );
  }
}

export default App;
