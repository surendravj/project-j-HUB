const express = require('express');
const router = express.Router();
const donar = require('../models/donar');
router.post('/donar/search', (req, res) => {
    var bloodgroup = req.body.searchblood;
    donar.find({ bloodGroup: bloodgroup })
        .then(data => {
            if (data) {
                renderData = {
                    dataset: data,
                    searchEle: 1
                }
                res.render('homepage', renderData);
            }
            else {
                console.log('No Blood Group');
                return res.redirect('/');
            }
        })
        .catch()

})

module.exports = router