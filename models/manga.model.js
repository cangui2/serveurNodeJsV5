const mongoose =require('mongoose')

const MangaSchema =mongoose.Schema({
    name: String,
    type:String,
    image_url:String,
    synopsis:String,
    volume:String,
    chapters:String,
    mal_id:String,
    age:String,
    is_active:{ type:Boolean,default:false},
    is_download:{ type:Boolean,default:false},
    categories:{type: mongoose.Schema.Types.ObjectId,ref:'CategorieManga'},
    episode:{type: mongoose.Schema.Types.ObjectId,ref:'Episode'}
},{
    timestamps: true,
})
module.exports =mongoose.model('Manga',MangaSchema)