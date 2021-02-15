const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');


router.post('/programs',
    // upload,
    mediaController.uploadProgramsIcon);


module.exports = router;