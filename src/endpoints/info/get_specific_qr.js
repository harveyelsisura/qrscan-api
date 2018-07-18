const qrInfo = require('../../models/qr_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendSuccess, sendResponse } = require('../../utils/responses_utils');



module.exports = (req, res, next) => {
    const { _id } = req.params;

    const getInfo = () => {
        console.log(req.params)
        return qrInfo.findById({ _id }).then(data => data)
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
                var qrinformation = await getData(getInformation);
                sendSuccess(
                    res,
                    qrinformation,
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