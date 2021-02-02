const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
            } //do remaining items reps sets distance
        }
    ]
})

//create workout model usng mongoose
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;