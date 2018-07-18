const appInfo = require('../../models/app_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendResponse } = require('../../utils/responses_utils');



module.exports = async function (req, res, next) {
    try {
        console.log('damlkdawdh')
        const { _id } = req.params;
        const { privacy_policy, about, faq } = req.body;
        console.log(req.params, req.body)
        appInfo.findByIdAndUpdate(
            _id,
            {
                privacy_policy: privacy_policy,
                about: about,
                faq: faq
            }
        ).then(data => {
            console.log(body)
            if (data) {
                sendResponse(res, 200, CODE_SUCCESS, "Successfully Update");
            } else {
                sendError(res, CODE_CONFLICT, MSG_CONFLICT_ERROR);
            }
        }).catch(err => {
            sendError(res, CODE_CONFLICT, MSG_CONFLICT_ERROR);
            throw err
        })
    } catch (err) {
        sendError(res, CODE_CONFLICT, MSG_CONFLICT_ERROR);
        console.log(err)
    }
}