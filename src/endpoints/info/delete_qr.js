const qrInfo = require('../../models/qr_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendSuccess, sendResponse } = require('../../utils/responses_utils');



module.exports = async function (req, res, next) {
    try {

        const { _id } = req.params;
        console.log(req.params)
        qrInfo.findByIdAndRemove({ _id: _id }).then(data => {
            if (data) {
                sendResponse(res, 200, CODE_SUCCESS, "Successfully Removed");
            } else {
                sendError(res, CODE_CONFLICT, MSG_CONFLICT_ERROR);
            }
        }).catch(err => {
            throw err
        })

    } catch (err) {
        console.log(err)
    }
}