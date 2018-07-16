const appInfo = require('../../models/app_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendSuccess, sendResponse } = require('../../utils/responses_utils');



module.exports = (req, res, next) => {
    const { _id } = req.params;
    const { privacy_policy, about, faq } = req.body;

    const getInfoAndUpdate = () => {
        console.log(req.body)
        return appInfo.findByIdAndUpdate(
            _id,
            {
                privacy_policy: privacy_policy,
                about: about,
                faq: faq
            }
        ).then(data => {
            return data
        }).catch(err => {
            throw err
        })
    },
        saveInfo = (data) => {
            return data.save()
        }


    async function main() {
        try {
            var getInformationAndUpdate = await getInfoAndUpdate()
            console.log(getInformationAndUpdate)
            if (getInformationAndUpdate) {
                await saveInfo(getInformationAndUpdate)
                sendResponse(res, 200, CODE_SUCCESS, "Successfully Update");
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