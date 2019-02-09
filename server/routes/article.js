const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', (req, res) => {
  Article.find().then(result => {
    res.send(result)
  })
})

module.exports = router;