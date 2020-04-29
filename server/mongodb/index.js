module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect("mongodb://127.0.0.1:27017/vue-mimall",{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("mongodb connect success!")
}