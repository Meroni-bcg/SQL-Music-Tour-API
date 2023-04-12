// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const { Band } = db

bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

// EXPORT
module.exports = bands
