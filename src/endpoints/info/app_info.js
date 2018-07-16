const appInfo = require('../../models/app_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendSuccess, sendResponse } = require('../../utils/responses_utils');



module.exports = (req, res, next) => {

    const getInfo = () => {
        return appInfo.find().then(data => data)
            .catch(err => {
                throw err;
            });
    },
        getData = (data) => {
            return data
        }

    async function main() {
        try {
            var getInformation = await getInfo()
            if (getInformation) {
                var appinformation = await getData(getInformation);
                sendSuccess(
                    res,
                    appinformation,
                    "Success");
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