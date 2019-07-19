const express = require('express')
const Items = require('../models/items')
const routes = express.Router()
const multer = require('multer')


// const storage = multer.diskStorage({
//     dest: function(req,file,cb){
//         cb(null , 'uploadFolder')
//     },
//     filename:(req,file,cb)=>{
//         const filenameSplit = file.originalname.split('.')
//         const fileExtension = filenameSplit[filenameSplit.length -1]
//         cb(null,date.now(+'.'+fileExtension))
//     }
// })

const uploadImage = multer({
    limits:{
        fileSize:10000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('plese upload an image'))
        }
        cb(undefined,true)
    }
})
routes.get('/image/:id',async (req,res)=>{
    try{
        const item = await Items.findById({_id:req.params.id})
        if(!item){
            res.status(404).send
        }
        res.setHeader('Content-Type', 'image/jpg')
        res.send(item.image)
        //console.log(item.image)
    }
    catch(e){
        res.status(500).send(e)
    }
})
routes.get('/items',async (req,res)=>{
  try{
    const items = await Items.find({})
    if(!items){
        res.status(404).send
    }
    //res.setHeader('Content-Type', 'image/jpg')
    res.send(items)
    //console.log(item.image)
  }

catch(e){
    res.status(500).send(e)
}

})
routes.post('/setitems' ,async (req,res)=>{
    try{
        const item = await Items(req.body).save()
        res.send(item)
    }
    catch(e){
        res.status(400).send(e)
    }
})
routes.post('/uploadimage/:id',uploadImage.single('image'),async (req,res)=>{
    const item = await Items.findById(req.params.id)
    item.image = req.file.buffer
    await item.save()
    res.set('Content-Type', 'image/jpg')
    res.send(item)
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})
module.exports = routes