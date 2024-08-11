const router = require('express').Router();
const executeAnswer = require('./controllers/CodeController');


router.post('/api/run',executeAnswer);

module.exports = router;