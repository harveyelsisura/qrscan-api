const qrInfo = require('../../models/qr_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendSuccess, sendResponse } = require('../../utils/responses_utils');



module.exports = async function (req, res, next) {
    try {
        qrInfo.find()
            .then(data => {
                if (data) {
                    sendResponse(res, 200, data, "Success");
                } else {
                    sendResponse(res, 200, [], 'No data found');
                }
            })
            .catch(err => {
                throw err;
            });

    } catch (err) {
        console.log(err)
    }
}