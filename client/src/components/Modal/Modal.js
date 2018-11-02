import React from "react";
import "./Modal.css";
import { Row, Input, Modal, Button, Icon } from "react-materialize";
import axios from "axios-jsonp-pro";
import { Redirect } from "react-router";

class TestModal extends React.Component {
  state = {
    username: "",
    password: "",
    redirectTo: null,
    login: true
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("sign-up-form, email: ");
    console.log(this.state.username);
    //request to server here
    axios
      .post("http://localhost:5000/api/users", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        sessionStorage.setItem('user', this.state.username);
        console.log(response);
        if (response.data) {
          console.log("successful signup");
          window.location.reload();

          this.setState({
            redirectTo: "/second"
          });
        } else {
          console.log("Sign-up error");
        }
      })
      .catch(error => {
        console.log("Sign up server error");
        console.log(error);
      });
  };
  handleSign = () => {
    this.setState({
      login: false
    });
  };

  handleLo = () => {
    this.setState({
      login: true
    });
  };
  handleLogin = event => {
    event.preventDefault();
    console.log("handleLogin");
    //request to server here
    axios
      .post("http://localhost:5000/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        sessionStorage.setItem('user', this.state.username);

        if (response.status === 200) {
          // this.props.updateUser({
          //   loggedIn: true,
          //   email: response.date.username
          // });
          window.location.reload();

          this.setState({
            redirectTo: "/second"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  handleChange = event => {
    console.log(event.target.name);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    const icon = this.state.login ? (
      <Row>
        <input
          type="email"
          name="username"
          placholder="Email"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleLogin}>Log In</button>
      </Row>
    ) : (
      <Row>

        <input
          type="email"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit}>Sign Up</button>
      </Row>
    );
    return (
      <Modal
        trigger={<Button>Sign Up | Login</Button>}
      >
        <div className="modal-header center-align"><h5  className="center-align">OneDay in Denver</h5><br></br>Start Your Adventure Now!</div>
        <div className="modal-body">
        {icon}
        <a onClick={this.handleLo}>Login |</a>
        <a onClick={this.handleSign}> Signup</a>

        {/* <div className="navbutton">{this.props.children}</div> */}
        </div>
      </Modal>
    );
  }
}
export default TestModal;
