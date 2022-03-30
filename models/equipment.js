const mongoose=require('mongoose')
const equipSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true

    },
    inventory:{
        type: Number,
        validate:{
            validator:v=>v>0,
            message : props => 'no more inventory for this item'
        }
    },
    updatedAt:{
        type:Date,
        default: ()=> Date.now()
    }
},
{
    collection: 'equipment'
})
let model= mongoose.model("equipment", equipSchema)
module.exports = model
console.log(model)