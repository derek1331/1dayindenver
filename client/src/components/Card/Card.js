import React from "react";
import "./Card.css";
import { Card, Col, CardPanel } from "react-materialize";

class Cardy extends React.Component {
  render() {
    return (
      <CardPanel className={this.props.color}>
        <div className="row">
          <div className="col s11">
            <span className={this.props.namecolor} style={this.props.style}>{this.props.name} </span>
            <br />

            {this.props.description}
          </div>
          <div className="col s1">
            {this.props.children}
          </div>
        </div>
      </CardPanel>
    );
  }
}

class Cardy2 extends React.Component {
  render() {
    return (
      <CardPanel className={this.props.class} style={this.props.style}>
        <div className="row">
          <div className="col s11">
            <a className={this.props.namecolor} href={this.props.href}>{this.props.name}</a>
            <br></br>
            <span >{this.props.time}</span>
            <br></br>
            <span>{this.props.location}</span>



          </div>
          <div className="col s1">
          {this.props.children}

          </div>
        </div>
      </CardPanel>
    );
  }
}

  
  class Cardy4 extends React.Component {
    render() {
      return(
        <CardPanel>
          {this.props.children}
        </CardPanel>
      )
    }
  }
export { Cardy, Cardy2, Cardy4 };
