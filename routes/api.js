const router = require("express").Router();
const db = require("../models");

// get route /api/workouts  
// get last workout
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration:{  $sum: '$exercises.duration', 
        
        }
      }
    },
    ]).then (dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
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
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration:{  $sum: '$exercises.duration', 
        
        }
      }
    },
    ])
    .sort({_id:-1})
    .limit(7)
    .then (dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });


module.exports = router;