import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exerciselist.component";
import ExerciseEdit from "./components/edit.component";
import CreatExercise from "./components/create.component";
import CreateUser from "./components/createuser.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<ExerciseEdit />} />
          <Route path="/create" element={<CreatExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
