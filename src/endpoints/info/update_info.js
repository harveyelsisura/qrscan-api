const appInfo = require('../../models/app_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendResponse } = require('../../utils/responses_utils');



module.exports = async function (req, res, next) {
    try {
        const { _id } = req.params;
        const { privacy_policy, about, faq } = req.body;
        appInfo.findByIdAndUpdate(
            _id,
            {
                privacy_policy: privacy_policy,
                about: about,
                faq: faq
            }
        ).then(data => {
            if (data) {
                sendResponse(res, 200, CODE_SUCCESS, "Successfully Update");
            } else {
                sendError(res, CODE_CONFLICT, MSG_CONFLICT_ERROR);
            }
        }).catch(err => {
            console.log(err);
            throw err
        })
    } catch (err) {
        console.log(err)
    }
}