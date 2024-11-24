const express = require('express');
const router = express.Router();
const { analyzePassword } = require('../controllers/analyzerController');

router.post('/analyze', analyzePassword);

module.exports = router;
