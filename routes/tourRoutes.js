const express = require('express');
const router = express.Router();
const {
  getAllTours,
  createNewTour,
  getTour,
  updateTour,
  deleteTour,
} = require('./../controllers/tourController.js');

router.route('/').get(getAllTours).post(createNewTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
