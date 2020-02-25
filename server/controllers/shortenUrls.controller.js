const ShortenUrls = require('../models/shortenurls.model');

// all logics 

// shortUrl generator 
function strGen() {
    var str = '';
    var symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
    var maxLength = 7;
    var numOfChar = Math.floor(Math.random() * maxLength) + 3; // at least 3 char, max 10 char
    // console.log(numOfChar);
    for (var i = 0; i <numOfChar; i++){
        str += symbol[Math.floor(Math.random() * symbol.length)];
        // console.log(str);
    }
    return str;
}
console.log(strGen());



// heaer chacker before store in DB
function headerCheck(str) {
    var base1 = 'https://';
    var base2 = 'HTTPS://';
    var head = '';
    for (var i = 0; i < base1.length; i++ ){
        head += str[i];
    }
    if (head != base1 && head != base2){
        str = base1 + str;
    }
    return str;
}
// console.log(headerCheck('str'));




module.exports = {

    getAll(_req, res) {
        ShortenUrls.find()
            .then (urls => res.json(urls))
            .catch(err => res.json(err));
    },

    getOne(req, res) {
        ShortenUrls.findById(req.params.id)
            .then(url => res.json(url))
            .catch(res.json);
    },

    delete(req, res) {
        ShortenUrls.findByIdAndDelete(req.params.id)
            .then(() => res.json({ status: 'success'}))
            .catch(err => res.json(err));
    },


    getShorten(req, res) {
        // Generate random string here
        ShortenUrls.create({
            // "longUrl": req.body.longUrl,   // req.body.longUrl
            "longUrl": headerCheck(req.body.longUrl),
            "shortUrl": strGen(),
        })
            .then((result) => res.json(result))
            // .then(console.log(req.body.shortUrl))
            // .then(console.log(req.body.longUrl))
            .catch(err => res.status(400).json(err))
            // console.log(req.body)
    },

    redirectUrl(req, res) {
        console.log(req.params)
        ShortenUrls.findOne({shortUrl: req.params.shortUrl})
        // console.log(req.data)
        // .then (urls => res.json(urls))  //whole json file is good  

        .then((url) => {
            // res.redirect(res.params.longUrl)
            res.redirect(url.longUrl)
            console.log(url.longUrl)
        })
        .catch(err => res.json(err))
    },

    // undefined means that a variable has been declared but has not yet been assigned a value
}


