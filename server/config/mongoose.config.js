const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortenurls', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});