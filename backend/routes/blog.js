const express = require('express');
const router = express.Router();
const { Blog } = require('../model/CreateModels')
const checkAuth = require('../middlewares/auth');
const imageUploadMIddleware = require('../middlewares/imageUpload');

// GET ALL ARTICLES
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json({ blogs: blogs })
    } catch (err) {
        console.log(err);
    }
})
// Create a new Blog
router.post('/',  imageUploadMIddleware, async (req, res) => {
    try {
        const { title, blogContent, blogType } = req.body;
        const blogImage = req.blogimageURL; // Get the image URL from the middleware
        const author = 'superAdmin'
        const newBlog = new Blog({ title, blogContent, author, blogType, blogImage });
        const savedBlog = await newBlog.save();
        
        res.json({ data: [{ message: 'Blog created successfully' }, { Blog: savedBlog }] });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }
})

// GET SPECIFIC  Blog
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const blog = await Blog.findOne({ _id: id });
    if (!blog) {
        return res.status(404).json({ message: 'blogs not found', error: error });
    }
    res.json({ blog: blog });
}
)

// Sesrch using a specific keyword for articles in the database 
router.get('/search/:keyword', async (req, res) => {
    try {
        const keyword = req.params.keyword;
        const blogs = await Blog.find({ $or: [{ title: { $regex: keyword, $options: 'i' } }, { body: { $regex: keyword, $options: 'i' } }, { author: { $regex: keyword, $options: 'i' } }] });
        if (!blogs) {
            return res.status(404).json({ message: 'blogs not found' });
        }
        res.json({ blogs: blogs });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }

});

// GET ALL ARTICLES WITH A SPECIFIC BLOGTYPE
router.get('/blogtype/:blogtype', async (req, res) => {
    try {
        const blogtype = req.params.blogtype;
        const blogs = await Blog.find({ blogtype: blogtype });
        if (!blogs) {
            return res.status(404).json({ message: 'blogs not found' });
        }
        res.json({ blogs: blogs });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error', error: error });
    }
})


module.exports = router;


