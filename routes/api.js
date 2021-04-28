const router = require("express").Router();
const Workout = require("../models/workout");

// get route /api/workouts  
// get last workout
router.get("/api/workouts", (req, res) => {
   Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

// add exercise
// /api/workouts/:id



// create Workout
// /api/workouts



// get workout in range
// /api/workouts/range



module.exports = router;