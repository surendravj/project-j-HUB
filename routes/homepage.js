const express = require('express')
const router = express.Router()
const donar=require('../models/donar')

router.get('/', (req, res) => {
    res.render('homepage')
})

router.post('/donar/details', (req, res) => {
   var data={
       name:req.body.name,
       bloodGroup:req.body.bloodgroup,
       contactNo:req.body.contactNumber,
       presentLocation:req.body.presentlocation,
       presentMedicalStatus:req.body.medicalstatus,
       lastDonate:req.body.donate
   }
})

module.exports = router