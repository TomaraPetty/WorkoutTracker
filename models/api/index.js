const router = require("express").Router();
const exercisesRoutes = require("./exercises")


const workout_controller = require('../../controllers/workout_controller');

router.route('/')
        .get(workout_controller.getWorkouts)
        .post(workout_controller.createWorkout)

router.put("/:id", workout_controller.updateWorkout)

router.delete("/delete/:id", workout_controller.deleteWorkout)

router.get("/range", eworkout_controller.getWorkouts)

router.use("/workouts", exercisesRoutes)

module.exports = router;