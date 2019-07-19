const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    seller:{
        type:String,
        required:true
    },
    price:{
        type:Number,

    },
    image:{
        type:Buffer,
    },
    desc:{
        type:String
    },
    catagory:{
        type:String
    },
    status:{
        type:String
    }
})
itemSchema.methods.toJSON = function(){
    //console.log("in to json")
   const item = this
   const itemToSend  = item.toObject()
    //console.log(itemToSend)
    delete itemToSend.image
    //console.log(itemToSend)
    return itemToSend
}
const Items = mongoose.model('Items',itemSchema)

module.exports = Items