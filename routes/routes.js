const express = require('express')
const router = express.Router()
const request = require('request')
const cheerio = require('cheerio')
const Article = require('../models/Article')
const Note = require('../models/Note')


const url = "https://www.indeed.com/jobs?q=full+stack+developer&l=Boston%2C+MA";

router.get('/scrape', (req,res)=>{
    request(url,(error, reponse, body)=>{
        const $=cheerio.load(body);
        $('.result').each(function(){
            let title = $(this).children('a').text();
            let link = $(this).children('a').attr('href');
            let company = $(this).find('.company').text();
            if(title){
                var article = new Article({title: title, link: link, company: company})
                article.save()
            }
        })
        res.redirect('/');
    })
})

router.get('/all',(req,res)=>{
    Article.find({}).then((data)=>{
        res.send(data);
    })
})

router.get('/',(req,res)=>{
    Article.find({}).then((data)=>{
        res.render('index',{items: data});
    })
})

router.get('/clear',(req,res)=>{
    Article.remove({}).then(()=>{
        res.redirect('/')
    })
})

router.post("/add", (req,res)=>{
    var note = new Note(req.body)
    note.save();
    res.send(req.body);
})

router.get("/notes", (req,res)=>{
    Note.find({}).then((data)=>{
        res.send({notes: data});
    })
})

module.exports = router;