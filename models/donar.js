const mongoose = require('mongoose');
const schema = mongoose.Schema

const newSchema = schema({
    name: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    presentLocation: {
        type: String,
        required: true
    },
    presentMedicalStatus: {
        type: String,
        required: true
    },
    lastDonate:{
        type:String,
        required:true
    }
})

const newdonar = mongoose.model('bloodApp', newSchema);

module.exports = newdonar;