const express = require('express');
const router = express.Router();

router.get('/userInformation', (req,res) => {

   
    res.render('userInformation')
})



module.exports = router;