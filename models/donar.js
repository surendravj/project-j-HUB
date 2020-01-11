const mongoose = require('mongoose');
const schema = mongoose.Schema
var mongoUrl = 'mongodb+srv://surendra:surendra14@cluster0-m7gbl.mongodb.net/blood?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo is connected'))
    .catch(err => console.log(err))

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
    presentMedcialStatus: {
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