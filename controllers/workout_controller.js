const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Workouts
        .find()
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Workouts
        .findById(req.params.id)
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Workouts
        .create(req.body)
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Workouts
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Workouts
        .findById({ _id: req.params.id })
        .then(dbWorkout => dbWorkout.remove())
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => res.status(422).json(err));
    }
};