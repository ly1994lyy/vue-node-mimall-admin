const express = require('express')

const app  = express()

app.use(require('cors')())
app.use(express.json())

require('./mongodb/index')(app)

app.listen(5000,()=>{
    console.log('http://localhost:5000')
})