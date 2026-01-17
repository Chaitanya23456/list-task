// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { deleteTask } = require('../controllers/taskcontroller');

router.delete('/:id', deleteTask);

module.exports = router;
