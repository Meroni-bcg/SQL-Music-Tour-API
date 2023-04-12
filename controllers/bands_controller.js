// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const { Band } = db

// INDEX
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

// SHOW
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

// CREATE
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(201).json({ message: 'Band created', newBand })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

// UPDATE
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: { band_id: req.params.id }
        })
        res.status(202).json({ message: `${updatedBands} band(s) updated` })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})

// DELETE
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: { band_id: req.params.id }
        })
        res.status(200).json({ message: `${deletedBands} band(s) deleted` })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' })
    }
})




// EXPORT
module.exports = bands