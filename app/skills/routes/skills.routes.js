const express = require('express');
const router = express.Router();
const skillsController = require('../controller/skills.controller');


router.post('/create', skillsController.create);
router.post('/update', skillsController.update);


module.exports = router;