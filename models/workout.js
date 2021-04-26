const mongoose = require("mongoose");

const workoutSchema=new Schema({
   
    Day: {
        type: Date,
        
      },
    exercises: [
        {
          type:  {
            type: String,
            trim: true,
            required: "Enter workout type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter Name"
          },
          duration: {
            type: Number,
          },
  
          weight: {
            type:Number,
          },
          reps: {
            type:Number,
          },

          sets: {
            type:Number,
          },
          distance:{
            type:Number,
          },
        }
      ]
    
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;