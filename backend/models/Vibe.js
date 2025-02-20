const mongoose = require('mongoose');

const VibeSchema = new mongoose.Schema({
    user: { type: String, required: true },
    location: { type: String, required: true },
    vibe: { type: String, enum: ['green', 'yellow', 'orange', 'red'], required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vibe', VibeSchema);
