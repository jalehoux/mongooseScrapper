var mongoose = require("./connection")

const noteSchema = mongoose.Schema({
    text: String,
    dateCreated:{
        type: Date,
        default: Date.now
    },
    article_id: String
})

module.exports = mongoose.model('Note', noteSchema)