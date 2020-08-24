const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

/* GET ALL BLOGS */
blogsRouter.get('/', (req, res, next) => {
    Blog.find({})
    .then(blogs => {
        res.json(blogs)
    })
    .catch(error => next(error))
})

/* GET ONE BLOG */

/* CREATE ONE BLOG */

blogsRouter.post('/', (req, res, next) => {
    const body = req.body

    const newBlog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    })

    newBlog
        .save()
        .then(savedBlog => {
            res.json(savedBlog)
        })
        .catch(error => next(error))
})

/* UPDATE ONE BLOG */

/* DELETE ONE BLOG */

module.exports = blogsRouter