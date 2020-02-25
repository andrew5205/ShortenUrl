const mongoose = require('mongoose');

const UrlsSchema = new mongoose.Schema({
    longUrl: {
        type: String
        // minlength: 3,  //"validation must more then 3 characters"
        // required: [
        //     true,
        //     "validation must more then 3 character"
        // ]
    },
    shortUrl: {
        type: String
        // minlength: 3,  //"validation must more then 3 characters"
        // required: [
        //     true,
        //     "validation must more then 3 character"
        // ]
    }
}, {timestamps: true});

// register model/ schema 
const Urls = mongoose.model('Urls', UrlsSchema);

// make sure you exports 
module.exports = Urls
