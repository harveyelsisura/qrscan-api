const mongoose = require('mongoose'),
    Schema = require('mongoose').Schema;

// if process success
const onSuccess = (data) => {
    return data;
}
// if process failed
const onError = (err) => {
    return err;
}

// mongoDB connection
dbconn = (callback) => {
    mongoose.Promise = global.Promise;
    // Replace MONGODB_URI to MONGODB_URI_LOCAL if you want data goes to local
    var URI = process.env.MONGODB_URI_LOCAL;
    mongoose.connect(URI, { config: { autoIndex: false } }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}


module.exports = {
    onSuccess,
    onError,
    dbconn
};
