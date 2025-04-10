const express = require('express');
const router = express.Router();
const apodController = require('../controllers/APODController');

// Home
router.get('/', apodController.getApodData);

//Refresh redirect
router.get('/refresh', (req, res) => {
    res.redirect('/');
});

module.exports = router;