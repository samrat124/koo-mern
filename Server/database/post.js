const {mongoose } = require("mongoose");


const postSchema= new mongoose.Schema({
    image: String,
    name: String,
    username:String,
    profession:String,
    description:String,
    hastags:String,
    image2:String,
    like: Number,
    comments:Number,
    rekoo: Number,
    tag:String
    
})

const Post = mongoose.model("Post",postSchema);

module.exports = Post;

