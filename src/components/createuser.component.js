import React, { Component } from "react";
import axios from "axios";
export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    let userdetail = {
      username: this.state.username,
    };
    axios.post("http://localhost:5000/users/add", userdetail).then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Email: </label>
            <input
              type="email"
              required
              className="form-control"
              placeholder={`Enter username here`}
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
