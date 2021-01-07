const express = require('express');
const router = express.Router();
const skillsController = require('../controller/skills.controller');


router.post('/create', skillsController.create);


module.exports = router;