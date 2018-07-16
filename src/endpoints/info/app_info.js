const appInfo = require('../../models/app_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { InternalServerError } = require('restify-errors');



module.exports = (req, res, next) => {
    try {
        appInfo.find()
            .then((holidays) => {
                console.log(holidays)
                res.send(200, { code: 'Success', msg: 'Successfully fetched', data: holidays });
            })
            .catch((err) => {
                throw new InternalServerError(err.message);
            });
    }
    catch (err) {
        res.send(new InternalServerError(err));
    }
}