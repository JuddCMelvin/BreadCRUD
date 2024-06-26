const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
    })
})

module.exports = breads

