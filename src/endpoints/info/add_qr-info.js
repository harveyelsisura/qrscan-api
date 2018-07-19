const qrInfo = require('../../models/qr_info'),
    {
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendResponse } = require('../../utils/responses_utils');



module.exports = async function (req, res, next) {
    try {
        let information = req.body;
        qrInfo.create(information);
        sendResponse(res, 200, CODE_SUCCESS, "Successfully Added");
    } catch (err) {
        console.log(err)
    }
}