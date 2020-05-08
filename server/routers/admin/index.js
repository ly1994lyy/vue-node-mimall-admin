module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')

    router.get('/category',async(req,res)=>{
        const model = await Category.find()
        res.send(model)
    })

    router.post('/category',async(req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.put('/category/:id',async(req,res)=>{
        const model = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete('/category/:id',async(req,res)=>{
        const model = await Category.findByIdAndDelete(req.params.id)
        res.send({
            type:'success',
            message:'删除成功!'
        })
    })

    app.use('/admin/api/rest/',router)
}