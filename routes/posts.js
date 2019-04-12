const express = require('express');
const db = require('../models');
const router = express.Router();

//POST /post -create new post. Form needed through GET/new
router.post('/', function(req, res){
    db.post.create({
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.authorId
    }).then(function(post){
        res.redirect('/');
    }).catch(function(error){
        res.status(500).render('main/500');
    })
});
//GET /post/new -sends the form for a new post//why??

router.get('/new', function(req, res){
    db.author.findAll()
    .then(function(authors){
        res.render('posts/new', {authors})
    }).catch(function(error){
        res.status(500).render('main/500');
    });
});
//GET /posts/:id -reads one post
router.get('/:id', function(req, res){
    db.post.findOne({
        where: {id: parseInt(req.params.id)},
        include: [db.author, db.comment]
    }).then(function(post){
        post.getTags().then(function(tag){
            res.render('posts/show', {post, tag});
        });
    });
});

// post/1
router.post('/:id', function(req, res){
    let id = parseInt(req.params.id);
    db.comment.create({
        name: req.body.name,
        content: req.body.content,
        postId: req.body.postId
    }).then(function(){
        res.redirect(`/posts/'${id}`);
    });
});

module.exports = router;

