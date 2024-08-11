// models/Contest.js
const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
});

const Contest = mongoose.model('Contest', contestSchema);

module.exports = Contest;
