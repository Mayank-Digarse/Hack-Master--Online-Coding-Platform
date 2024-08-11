// routes/contestRoutes.js
const express = require('express');
const Contest = require('../models/Contest');
const router = express.Router();

// Get all contests
router.get('/api/contests', async (req, res) => {
    try {
        const contests = await Contest.find();
        res.json(contests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contests' });
    }
});

// Create a new contest
router.post('/api/contests', async (req, res) => {
    const { name, description, startTime, endTime } = req.body;

    const newContest = new Contest({
        name,
        description,
        startTime,
        endTime,
    });

    try {
        const savedContest = await newContest.save();
        res.json(savedContest);
    } catch (error) {
        res.status(500).json({ message: 'Error creating contest' });
    }
});

module.exports = router;
