const mongoose =require('mongoose')

const CategorieMangaSchema =mongoose.Schema({
    name: String,
    is_active:{ type:Boolean,default:false},

},{
    timestamps: true,
})
module.exports =mongoose.model('CategorieManga',CategorieMangaSchema)