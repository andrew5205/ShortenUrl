const ShortenUrlsController = require('../controllers/shortenUrls.controller');

module.exports = app => {

    // these are urls

    // post 
    // app.post('/api/urls', ShortenUrlsController.create);

    // get all urls
    app.get('/api/urls', ShortenUrlsController.getAll);
    
    // find single one by its id from url path 
    app.get('/api/urls/find/:id', ShortenUrlsController.getOne);
    // delete single one by its id from url path 
    app.delete('/api/urls/delete/:id', ShortenUrlsController.delete);
    // // update single one by its id from url path 
    // app.put('/api/urls/:id', ShortenUrlsController.update);

    // post shorten urls 
    app.post('/api/urls', ShortenUrlsController.getShorten);

    //route for redirect method 
    app.get('/api/urls/:shortUrl', ShortenUrlsController.redirectUrl);
}