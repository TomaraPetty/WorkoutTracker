const router = require('express').Router();
const workout_controller = require('../../controllers/workout_controller');
path = require('path');

router
  .route('/')
  .get(workout_controller.findAll)
  .post(workout_controller.create);

router
  .route('/:id')
  .get('/range', workout_controller.findById)
  .put('/:id', workout_controller.update)
  .delete('/delete/:id', workout_controller.remove);

// router.use('/workouts', exerciseRoutes);

module.exports = router;