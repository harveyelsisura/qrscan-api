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
        const { company, location, date_info: { date_issued, date_expiry }, qr_description, status } = req.body;
        qrInfo.findByIdAndUpdate(
            _id,
            {
                company: company,
                location: location,
                date_info: {
                    date_issued: date_issued,
                    date_expiry: date_expiry
                },
                qr_description: qr_description,
                status: status
            }
        ).then(data => {
            if (data) {
                sendResponse(res, 200, CODE_SUCCESS, "Successfully Update");
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