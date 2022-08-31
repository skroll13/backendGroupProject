const express = require('express')
const router = express.Router()
const auth = require('../auth')

router.get('/lectures', auth, (req, res) => {
  //having 'auth' is what keeps the page protected

  res.render('lectures')
})

module.exports = router
