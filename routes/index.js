const express = require('express');
const router = express.Router();

const db = require('../models')

router.get('/', (req,res) => {
    res.render('index')
})


router.get('/nationalParks', async(req, res)=>{
    try{
        let records = await db.nationalParks.findAll();
        records.forEach(obj => {
            console.log(obj.parkName)})
    }
    catch(error){
        console.log(error);
    }
})







module.exports = router