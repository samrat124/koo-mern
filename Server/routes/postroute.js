const express= require('express');
const { createPost, getPost,getPostCricket,getPostPopular, getPostById, updatePost, deletePost } = require('../controller/post.controller');
const { authentication } = require('../middleware/authentication');

const postRouter = express.Router();

postRouter.post('/posts/data',authentication,async(req,res)=>{

    try{
        let body = req.body;
        let user = req.user;
        let status = await createPost(body,user);
        res.send({
            data:status
        })
    }catch(err){
        res.status(404).send({
            err:err.message
        })
    }

})

postRouter.get("/posts",async(req,res)=>{

    try{
        let user = req.user;
        let query = req.query;

         

        let data = await getPost(user,query);

        
        res.send({
            data:data
        })
    }catch(err){
        res.status(404).send({
            err:err.message
        })
    }


})
postRouter.get("/posts/cricket",async(req,res)=>{

    try{
        let user = req.user;
        let query = req.query;
        let data = await getPostCricket(user,query);

        console.log(data);
        res.send({
            data:data
        })
    }catch(err){
        res.status(404).send({
            err:err.message
        })
    }


})

postRouter.get("/posts/popular",async(req,res)=>{

    try{
        let user = req.user;
        let query = req.query;
        let data = await getPostPopular(user,query);

        console.log(data);
        res.send({
            data:data
        })
    }catch(err){
        res.status(404).send({
            err:err.message
        })
    }


})

postRouter.get("/post/:id",async(req,res)=>{

    try{
        let user = req.user;
        let id = req.params.id
        let data = await getPostById(id,user);
        res.send({
            data:data
        })
    }catch(err){
        res.status(404).send({
            err:err.message
        })
    }

})

postRouter.patch("/post/update/:id",authentication,async(req,res)=>{

    try{
        let user = req.user;
        let id = req.params.id
        let body = req.body;
        let data = await updatePost(id,user,body);
        res.send({
            data:data
        })
    }
    catch(err){
        res.status(404).send({
            err:err.message
        })
    }




})
postRouter.delete("/post/delete/:id",authentication,async(req,res)=>{

    try{
        let user = req.user;
        let id = req.params.id
        let data = await deletePost(id,user);
        res.send({
            data:data
        })
    }catch(err){
        res.status(404).send({
            err:err.message
        })
    }

})



module.exports={postRouter};