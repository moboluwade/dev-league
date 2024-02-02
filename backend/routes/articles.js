const express = require('express');
const router = express.Router();
const Articles = require('../model/Articles');


// GET ALL ARTICLES
router.get('/', async (req, res) => {

    try{
            const Articles = await Article.find();
            res.json({Articles : Articles})
    }catch(err){
        console.log(err);
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

// THIS IS STILL IN TESTING 

router.get('/search', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})


module.exports = router;


