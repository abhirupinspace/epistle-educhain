const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    heading : {
        type: String,
        required : true
    },
    subheading : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    genre : {
        type: String,
        required : true
    },
    location : {
        type: String,
        required : true
    },
    time : {
        type: Date,
        required : true
    },
    link : {
        type: String,
        required : false
    },
    uploadMedia : {
        type: String,
        required : true
    },
    upVote : {
        type : Number,
        required : true
    },
    downVote : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model("Article" , articleSchema);