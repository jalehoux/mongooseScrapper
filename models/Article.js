const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.MONGOOSE_CONNECT)

const articleSchema = mongoose.Schema({
    title: String,
    link: String,
    company: String
})

module.exports = mongoose.model('Article',articleSchema)