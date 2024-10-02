const express = require('express');
const router = express.Router();
const { createBanner } = require('../controllers/bannerController');

router.post('/generate', createBanner);

module.exports = router;
