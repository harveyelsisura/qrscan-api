const appInfo = require('../../models/app_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendResponse } = require('../../utils/responses_utils');



module.exports = async function (req, res, next) {
    try {
        appInfo.find()
            .then(data => {
                if (data) {
                    sendResponse(res, 200, data, "Success");
                } else {
                    sendResponse(res, 200, [], "Success");
                }
            })
            .catch(err => {
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}