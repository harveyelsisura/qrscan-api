const appInfo = require('../../models/app_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendSuccess } = require('../../utils/responses_utils');



module.exports = async function (req, res, next) {
    try {
        appInfo.find()
            .then(data => {
                let dataObject = data.pop();
                console.log(dataObject)
                if (dataObject) {
                    sendSuccess(res, dataObject, "Success");
                } else {
                    sendSuccess(res, {}, "Success");
                }
            })
            .catch(err => {
                throw err;
            });
    } catch (err) {
        console.log(err)
    }
}