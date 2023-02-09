const Posts = require('../models/posts.models');

const findAllPosts = async() => {
    
    const data = await Posts.findAll();
    return data;

}

const findPostById = async(id) => {
    const data = await Posts.findOne({
        where:{
            id
        }
    })
    return data;

}

const createPost = async(post) => {
    const newPosts= {
        content: post.content,
        userName: post.userName,
        isPublished: post.isPublished
    }
    const data = await Posts.create(newPosts);
    return data;

}

const updatePost = async(id, productObj) => {   
    const data = await Posts.update(productObj,{
        where:{
            id
        }
    })
    
    return data;
}

const deletePost = async(id) => {
    
    const data = await Posts.destroy({
        where:{
            id
        }
    });
    return data;
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
