const passwordGenerator = require('generate-password'),
    bcrypt = require('bcryptjs'),
    userAccount = require('../models/user_accounts'),
    jwt = require('jsonwebtoken'),
    { CODE_FORBIDDEN } = require('../globals/globals'),
    { sendResponse, sendError } = require('./responses_utils');


// for comparing password
exports.comparePasswords = (passedPassword, storedPassword) => {
    // console.log(passedPassword, storedPassword);
    return bcrypt.compare(passedPassword, storedPassword).
        then(data => data).catch(err => err);
};
//for hashing password
exports.hashPassword = (password) => {
    saltRounds = 10;
    return bcrypt.hash(password, saltRounds).
        then(data => data).catch(err => {
            throw err
        });
};
//generate random password
exports.generateRandomPassword = function () {
    let password = passwordGenerator.generate({
        length: 5, numbers: true
    });
    return password;
};
//generate JWT access token
exports.generateAppAccessToken = (payload) => {
    let key = "dsds";
    return jwt.sign(payload, key, { expiresIn: '365d' });
};

// get login info account
const
    findUser = (_id) => {
        return userAccount.findById(_id).
            then(data => {
                return data;
            }).catch(err => {
                console.log(err);
            });
    };

//validate JWT access token
exports.validateAppToken = (req, res, next) => {
    // get access token from header
    var token = req.headers['x-access-token'] || undefined;
    console.log(token)
    var key = "dsds"
    // verify access token
    verifyCb = (err, tokenData) => {
        if (!err) {
            const { _id } = tokenData;
            findUser(_id).
                then(data => {
                    if (data !== null) {
                        return next();
                    } else {
                        sendResponse(
                            res,
                            403,
                            "",
                            "Invalid User"
                        );
                    }
                }).catch(err => {
                    console.log(err);
                });
        } else {
            sendError(res, "Invalid access token", err)
        }
    };
    if (token) {
        jwt.verify(token, key, verifyCb);
    }
    else {
        sendResponse(
            res,
            403,
            CODE_FORBIDDEN,
            "Invalid access token"
        );
    }
};

exports.decodeToken = (token) => {
    return jwt.decode(token);
}