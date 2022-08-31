const express = require('express');
const router = express.Router();

router.get('/nationalParks', (req,res) => {

   
    res.render('nationalParks')
})



module.exports = router;