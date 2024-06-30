const mongoose = require("mongoose");

const pointerSchema = new mongoose.Schema({
    lat : {
        type: Number,
        required : true
    },
    lng : {
        type: Number,
        required : true
    },
    point : {
        type: Number,
        required : true,
        
    }
});

module.exports = mongoose.model("Pointer" , pointerSchema);