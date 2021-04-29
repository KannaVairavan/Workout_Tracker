const router = require("express").Router();
const db = require("../models");

// get route /api/workouts  
// get last workout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

// add exercise
// /api/workouts/:id
router.put("/api/workouts/:id", ({body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,{$push:{exercises:body}}
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
   .catch((err) => {
    res.status(400).json(err);
    });
    
  });

// create Workout
// /api/workouts
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// get workout in range
// /api/workouts/range



module.exports = router;