const path = require('path');
const router = require('express').Router();
const exercisesRoutes = require('./api');
const htmlRoutes = require('./html')

// API Routes
router.use('/workouts', exercisesRoutes);
router.use('/', htmlRoutes)

module.exports = router;
