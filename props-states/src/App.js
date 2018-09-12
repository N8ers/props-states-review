import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is : {this.props.propNumber}</h3>
        <h3>prop number is : {this.props.propString}</h3>
        <h3>prop number is : {this.props.propObject.obj1}</h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: React.PropTypes.object,
  propString: React.PropTypes.string,
  propNumber: React.PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "This is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}

class Parent extends Component {
  render(){
    return(
      <div>
        <h2>Just some info</h2>
        <Cars msg="cars are cool" model="34567" coolCars={this.props.cars} />
        {/* this is being saved as a global variable */}
      </div>
    );
  }
}

//below is a default method
Parent.defaultProps = {
  cars:['BMW', 'Merc', 'City', 'Audi']
}

// types of properties

class Cars extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <h3> I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p> ;
          })}</div>
      </div>
    );
  }
}

export default App;
