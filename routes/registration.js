const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs') //hash and salt our password
const db = require('../models') //models/index.js

router.get('/registration', (req, res) => {
  res.render('registration')
})

router.post('/registration', async (req, res) => {
  //collect data form form and store it in our db
  try {
    //scrape info from the header
    let { username, email, password } = req.body

    /**
     * let username = req.body.username
     * let email = req.body.email
     * let password = req.body.password
     */

    //encrypt our password

    password = bcrypt.hashSync(password, 8) //a salted hash

    //create new record in our db

    let insertRecord = await db.users.create({
      username: username,
      email: email,
      password: password,
      roeleID: 1
    })

    res.redirect('/login')
  } catch (error) {
    res.render('registration', {
      error: "error: can't register this username"
    })
  }
})

module.exports = router
