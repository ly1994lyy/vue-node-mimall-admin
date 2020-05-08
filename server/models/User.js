const mongoose = require('mongoose')
const schema = mongoose.Schema({
    username:{type:String},
    password:{type:String}
})

module.exports = mongoose.model('User',schema)