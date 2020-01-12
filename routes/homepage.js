const express = require('express')
const router = express.Router()
const donar = require('../models/donar')

router.get('/', (req, res) => {
    res.render('homepage')
})



router.post('/donar/details', (req, res) => {
    var data = {
        name: req.body.name,
        bloodGroup: req.body.bloodgroup,
        contactNo: req.body.contactnumber,
        presentLocation: req.body.presentlocation,
        presentMedicalStatus: req.body.medicalstatus,
        lastDonate: req.body.donate
    }
    if (data.lastDonate == 'select' || data.bloodGroup == 'select') {
        console.log('select')
        return res.redirect('/');
    }
    else {

        donar.findOne({ contactNo: req.body.contactnumber })
            .then(user => {
                if (user) {
                    console.log('User Exist');
                    return res.redirect('/');
                } else {
                    var newDonar = new donar(data);
                    newDonar.save()
                        .then(() => console.log('Saved succesfully'))
                        .catch(err => console.log(err))
                }
            })
            .catch()
    }
})

module.exports = router