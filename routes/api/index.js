//root route
const router = require("express").Router();
const Transaction = require("path");
const {route}=require("..");

// 
// route.get /api/workouts
router.get("/api/workouts", (req, res) => {
    Transaction.find({})
      .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



router.post("api/workouts",)

// post/api/workouts
// route.get /api/workouts/:id
// /api/workouts/range
// /exerice?

// display exerice

