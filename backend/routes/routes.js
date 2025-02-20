const express = require('express');
const router = express.Router();
const Vibe = require('../models/Vibe'); // Ensure this path is correct

// Create a Vibe (POST)
router.post('/vibes', async (req, res) => {
    try {
        const newVibe = new Vibe(req.body);
        await newVibe.save();
        res.status(201).json(newVibe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read All Vibes (GET)
router.get('/vibes', async (req, res) => {
    try {
        const vibes = await Vibe.find();
        res.json(vibes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read Single Vibe (GET)
router.get('/vibes/:id', async (req, res) => {
    try {
        const vibe = await Vibe.findById(req.params.id);
        if (!vibe) return res.status(404).json({ message: 'Vibe not found' });
        res.json(vibe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Vibe (PUT)
router.put('/vibes/:id', async (req, res) => {
    try {
        const updatedVibe = await Vibe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedVibe) return res.status(404).json({ message: 'Vibe not found' });
        res.json(updatedVibe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete Vibe (DELETE)
router.delete('/vibes/:id', async (req, res) => {
    try {
        const deletedVibe = await Vibe.findByIdAndDelete(req.params.id);
        if (!deletedVibe) return res.status(404).json({ message: 'Vibe not found' });
        res.json({ message: 'Vibe deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
