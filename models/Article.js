const mongoose = require('./connection')

const articleSchema = mongoose.Schema({
    title: String,
    link: String,
    company: String
})

module.exports = mongoose.model('Article',articleSchema)