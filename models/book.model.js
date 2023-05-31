const mongoose =require('mongoose')

const BookSchema =mongoose.Schema({
    name: String,
    type:String,
    image_url:String,
    synopsis:String,
    location:String,
    is_active:{ type:Boolean,default:false},
    is_download:{ type:Boolean,default:false},
},{
    timestamps: true,
})
module.exports =mongoose.model('Manga',BookSchema)