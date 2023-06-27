const express = require('express')
const app = express();
const path = require('node:path')
let blogs = require('./repository/blogs')
const {v4: uuid} = require('uuid');
const methodOverride = require('method-override');


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views')) //files to be rendered in response
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.send("Connected")
})

// Show all blogs
app.get('/blogs', (req, res) => {
    res.render('index', {blogs})
    // for (let blog of blogs) {
    //     console.log(blog.id);
    // } //How to get the generated blog id without doing the console??
})

// Render form for creating a new blog
app.get('/blogs/new', (req, res) => {
    res.render('new') //rendering the form
})

// Post a new blog
app.post('/blogs', (req, res) => {
    //req.body --> query params values filled in the form
    const {title, imgUrl, desc} = req.body
    const newBlog = {id: uuid(), title, imgUrl, desc};
    blogs.push(newBlog);
    res.redirect('/blogs');
})

// Show a blog by id
app.get('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params;
    const foundBlog = blogs.find((blog) => blog.id === blogId)
    if(!foundBlog) {
        res.send("Requesting an incorrect blog Id")
    }
    res.render('show', {foundBlog});
    // console.log(foundBlog);
})

// Render an update blog form
app.get('/blogs/:blogId/edit', (req, res) => {
    const { blogId } = req.params
    const foundBlog = blogs.find((blog) => blog.id === blogId)
    if(!foundBlog) {
        res.send("Requesting an incorrect blog Id")
    }
    res.render('edit', {foundBlog})
})

// Update a blog
app.patch('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params
    const { title, imgUrl, desc } = req.body
    const newBlogs = blogs.map((blog) => blog.id === blogId ? {...blog, title: title, imgUrl: imgUrl, desc: desc} : blog)
    blogs = newBlogs;
    res.redirect(`/blogs/${blogId}`);
})

//Delete a blog
app.delete('/blogs/:blogId', (req, res) => {
    const { blogId } = req.params
    const newBlogs = blogs.filter((blog) => blog.id !== blogId)
    blogs = newBlogs
    res.redirect('/blogs') 
})


app.listen(4000, () => {
    console.log("Server running at port 4000")
})