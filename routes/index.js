const path = require('path');
const router = require('express').Router();
const exercisesRoutes = require('./api/exerciseRoutes');

// API Routes
router.use('/workouts', exercisesRoutes);

// If no API routes are hit
router.use(function (req, res) {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
      });

module.exports = router;
