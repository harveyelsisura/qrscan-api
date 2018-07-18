const qrInfo = require('../../models/qr_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendSuccess, sendResponse } = require('../../utils/responses_utils');



module.exports = (req, res, next) => {
    let information = req.body;
    const createAccount = () => {
        var addInfo = Object.assign(information);
        let newInfo = new qrInfo(addInfo);
        return newInfo
    },
        saveInfo = (data) => {
            return data.save()
        }

    async function main() {
        try {
            var qrInfo = await createAccount()
            console.log(qrInfo)
            if (qrInfo) {
                await saveInfo(qrInfo)
                sendResponse(res, 200, CODE_SUCCESS, "Successfully Added");
            } else {
                sendError(
                    res,
                    CODE_CONFLICT,
                    MSG_CONFLICT_ERROR
                );
            }
        } catch (err) {
            console.log(err)
        }
    }
    main();
}