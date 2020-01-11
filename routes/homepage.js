const express = require('express')
const router = express.Router()
const donar = require('../models/donar')

router.get('/', (req, res) => {
    res.render('homepage')
})


// helper function
arr = ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-']
var validBloodGroup = (bloodGroup) => {
    arr.forEach(element => {
        if (element == bloodGroup) {
            return true;
        }
    })
    return false;
}
router.post('/donar/details', (req, res) => {
    var data = {
        name: req.body.name,
        bloodGroup: req.body.bloodgroup,
        contactNo: req.body.contactNumber,
        presentLocation: req.body.presentlocation,
        presentMedicalStatus: req.body.medicalstatus,
        lastDonate: req.body.donate
    }
    if (!validBloodGroup(data.bloodGroup)) {
        console.log('invalid')
        return res.redirect('/');
    }
    if (data.lastDonate == 'select' || data.bloodGroup == 'select') {
        console.log('select')
        return res.redirect('/');
    }
    else {
        console.log(data)
        return res.redirect('/');
    }
})

module.exports = router