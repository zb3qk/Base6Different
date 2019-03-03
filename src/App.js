import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {num1, num2, base1, base2, operation, op2, disp1, disp2, answer, startFunction, addFunction, genrandom, gensols} from './generate.js';

var arrs = genrandom();

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: 0,
            style: style.buttons,
            random: "id=" + Math.floor(Math.random()*1000000000)
        }
        this.changeState = this.changeState.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    changeState(){
      this.setState( () => {
        return { clicked: 1 }
      });

      if(this.props.correct == true){
        this.setState( () => {
          return { style: style.counter }
        }); }
      else if(this.props.correct == false){
          this.setState( () => {
            return { style: style.error }
        }); }
    }

      changeStyle(){
        alert("SUCK ME OFF");
        if(this.state.clicked == 1 && this.props.correct == 1){
          this.setState( () => {
            return { style: style.buttons }
          }); }
        else if(this.state.clicked == 1 && this.props.correct == 0){
          this.setState( () => {
            return { style: style.error }
          });
        }
        else {
          this.setState( () => {
            return { style: style.counter }
          });
        }
    }

    componentDidUpdate(prevProps, prevState){ //ie. onClick
        //This will be called after the component is updated
        //Remember component can only be updated when the state changes
        //or the props changes
        if(this.props.correct == 1){
          //alert(gensols(20,2));
          //alert("good job!");
        }
        if(true){

        }
        if(this.props.correct == 0){
          //alert("bad job!");
          //FAIL
        }
    }

    componentDidMount(){
        document.getElementById(this.state.random).innerHTML = this.props.number;
        //alert(this.props.id + " " + this.props.number);
    }

    render() {
        //{this.state.clicked}
        //if(this.states.clicked == 1 && this.props.correct == 0){}
        return (
            <div style={style.container}>
                <div style={this.state.style}
                     onClick={this.changeState}>
                {<p id={this.state.random}></p>}
                </div>
            </div>
        );
    }
}
const style = {
    container: {
        display: 'flex'
    },
    buttons: {
        padding: `0px 7px 0px 7px`,
        backgroundColor: 'grey',
        width: 200,
        height:80,
        cursor: 'pointer'
    },
    counter: {
        padding: `0px 7px 0px 7px`
    },
    error: {
        padding: `0px 7px 0px 7px`,
        backgroundColor: '#ea3c54'
    },
    p1: {
      color: 'red',
      width: 200
    }

}

class App extends Component {
  componentDidMount () {
    startFunction();
    }

  render() {
    var arrays = genrandom();
    window.positions = arrays[0];
    window.nums = arrays[1];

    return (

      <div className="App">
        <header className="App-header">
          <p id="p1"></p>
          <p id="time"></p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter id ="1" number={window.nums[window.positions[0]]} correct={window.positions[0]<4}/>
          <Counter id ="2" number={window.nums[window.positions[1]]} correct={window.positions[1]<4}/>
          <Counter id ="3" number={window.nums[window.positions[2]]} correct={window.positions[2]<4}/>
          <Counter id ="4" number={window.nums[window.positions[3]]} correct={window.positions[3]<4}/>
          <Counter id ="5" number={window.nums[window.positions[4]]} correct={window.positions[4]<4}/>
          <Counter id ="6" number={window.nums[window.positions[5]]} correct={window.positions[5]<4}/>
          <Counter id ="7" number={window.nums[window.positions[6]]} correct={window.positions[6]<4}/>
          <Counter id ="8" number={window.nums[window.positions[7]]} correct={window.positions[7]<4}/>
          <Counter id ="9" number={window.nums[window.positions[8]]} correct={window.positions[8]<4}/>
        </header>
      </div>
    );
  }
}

export default App;
