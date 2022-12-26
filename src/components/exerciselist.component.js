import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);
export default class ListExercise extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercise: [] };
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercise/" + id).then((response) => {
      console.log(response);
    });
    this.setState({
      exercise: this.state.exercise.filter((el) => el.id !== id),
    });
  }
  exerciseList() {
    return this.state.exercise.map((currentEl) => {
      return (
        <Exercise
          exercise={currentEl}
          deleteExercise={this.deleteExercise}
          key={currentEl._id}
        />
      );
    });
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercise")
      .then((response) => {
        this.setState({ exercise: response });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
