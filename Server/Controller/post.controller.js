const { checkToken } = require("../CommonFunction/CommonFunction");
const Post = require("../database/post");
const User = require("../database/user");


const createPost = async (body, user) => {

    let findUser = await User.findOne({ email: user.email });

    let newPost = await Post.create({
        ...body,
        userId: findUser.id
    });

    return `Sucessfully Created`;
}

const getPost = async (user, query) => {
     
    // let findUser = await User.findOne({ email: user.email });

    //    let posts = await Post.find({ userId: findUser.id});

    if(query.q)
    {

        
        let posts=await Post.find({username:{$regex:query.q}})
       console.log(posts);
        return posts;
    }

    let posts=await Post.find({tag:"users"}).limit(5);


    return posts;
}
const getPostCricket = async (user, query) => {
     
    // let findUser = await User.findOne({ email: user.email });

    //    let posts = await Post.find({ userId: findUser.id});

    let posts=await Post.find({tag:"cricket"});
 
    console.log(posts);
    


    return posts;
}
const getPostPopular = async (user, query) => {
     
    // let findUser = await User.findOne({ email: user.email });

    //    let posts = await Post.find({ userId: findUser.id});

    let posts=await Post.find({tag:"mostPopular"});
 
    console.log(posts);
    


    return posts;
}
const getPostById = async (id, user) => {

    // let findUser = await User.findOne({ email: user.email });
    let post = await Post.findOne({ _id: id });
    // if (post.userId != findUser.id) {
    //     throw new Error('Not Authorize');
    // }

    

    return post;
}
const deletePost = async (id, user) => {

    let findUser = await User.findOne({ email: user.email });
    let post = await Post.findOne({ _id: id });
    if (post.userId != findUser.id) {
        throw new Error('Not Authorize');
    }

    await Post.deleteOne({_id:id});


    return post;
}


const updatePost = async (id, user,body) => {

    let findUser = await User.findOne({ email: user.email });
    let post = await User.findOne({ _id: id });
    if (post.userId != findUser.id) {
        throw new Error('Not Authorize');
    }

    await Post.updateOne({_id:id},{$set:{...body}});

    return `Sucessfully Updated`;

}

module.exports = { createPost, getPost,getPostCricket, getPostPopular,getPostById,updatePost,deletePost };