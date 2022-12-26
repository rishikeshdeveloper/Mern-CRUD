const router = require("express").Router();
const { get } = require("mongoose");
let Exercise = require("../models/exercise");
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.send("Error:" + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Exercise({ username, description, duration, date });
  newExercise
    .save()
    .then(() => res.json(newExercise))
    .catch((err) => res.status(400).json(err));
});
router.route("/:id").get((req, res) => {
  const id = req.params.id;
  Exercise.findById(id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("err" + err));
});

router.route("/:id").delete((req, res) => {
  const exerciseId = req.params.id;
  Exercise.findByIdAndDelete(exerciseId).then(() =>
    res
      .json("deleted item successfully")
      .catch((err) => res.status(400).send("err" + err))
  );
});
router.route("/update/:id").get((req, res) => {
  const exerciseId = req.params.id;
  Exercise.findById(exerciseId)
    .then((exercise) => {
      console.log(exercise);
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = req.body.duration;
      exercise.date = Date.parse(req.body.date);
      exercise
        .save()
        .then(() => res.send("data updated successfully"))
        .catch((err) => res.send("err" + err));
    })
    .catch((err) => res.status(400).send("error " + err));
});
module.exports = router;
