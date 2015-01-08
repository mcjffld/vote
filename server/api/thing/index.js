'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/up', controller.up);
router.get('/down', controller.down);

module.exports = router;