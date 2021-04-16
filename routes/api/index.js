const router = require("express").Router();
const exercisesRoutes = require("./exerciseRoutes")

router.use("/workouts", exercisesRoutes)

module.exports = router;