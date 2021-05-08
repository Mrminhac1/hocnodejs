const express = require('express');
const router = express.Router();

const itemController = require('../app/controllers/itemController');

router.get('/', itemController.index);

module.exports = router;
