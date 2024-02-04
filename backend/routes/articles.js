const express = require('express');
const router = express.Router();
const Article= require('../model/Articles');


// GET ALL ARTICLES
router.get('/', async (req, res) => {

    try{
            const Articles = await Article.find();
            res.json({Articles : Articles})
    }catch(err){
        console.log(err);
    }
})
// Create a new Article
router.post('/', async (req, res) => {
    try {
        const {title, body, author, blogtype, blogimage} = req.body;
        const newArticle = new Article({title, body, author, blogtype, blogimage});
        const savedArticle = await newArticle.save();
        res.json({message : 'Article created successfully', Article : savedArticle});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : 'Internal server error', error : error});
    }       
})

// GET SPECIFIC  Article
router.get('/:id', async (req, res) => {
    const  id =  req.params.id;
    const Articles = await Article.findOne({_id : id});
    if(!Articles){
        return res.status(404).json({message : 'Articles not found'});
    }
    res.json({Articles : Articles});
}
)

// Sesrch using a specific keyword for articles in the database 
router.get('/search/:keyword', async (req, res) => {
    try {
        const keyword = req.params.keyword;
        const Articles = await Article.find({$or : [{title : {$regex : keyword, $options : 'i'}}, {body : {$regex : keyword, $options : 'i'}}, {author : {$regex : keyword, $options : 'i'}}]});
        if(!Articles){
            return res.status(404).json({message : 'Articles not found'});
        }
        res.json({Articles : Articles});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : 'Internal server error', error : error});
    }
  
} );

// GET ALL ArtICLES WITH A SPECIFIC BLOGTYPE
router.get('/blogtype/:blogtype', async (req, res) => {
    try {
        const blogtype = req.params.blogtype;
        const Articles = await Article.find({blogtype : blogtype});
        if(!Articles){
            return res.status(404).json({message : 'Articles not found'});
        }
        res.json({Articles : Articles});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message : 'Internal server error', error : error});
    }
})


module.exports = router;


