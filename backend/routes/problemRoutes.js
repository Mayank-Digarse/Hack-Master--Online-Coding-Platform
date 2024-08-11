// // routes/problemRoutes.js
// const express = require('express');
// const Problem = require('../models/Problem');
// const router = express.Router();

// // Get all problems
// router.get('/api/problems', async (req, res) => {
//     try {
//         const problems = await Problem.find();
//         res.json(problems);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching problems' });
//     }
// });

// // Create a new problem
// router.post('/api/problems', async (req, res) => {
//     const { title, description, constraints, testCases } = req.body;

//     const newProblem = new Problem({
//         title,
//         description,
//         constraints,
//         testCases,
//     });

//     try {
//         const savedProblem = await newProblem.save();
//         res.json(savedProblem);
//     } catch (error) {
//         res.status(500).json({ message: 'Error saving problem' });
//     }
// });

// module.exports = router;
