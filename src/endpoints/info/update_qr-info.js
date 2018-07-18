const qrInfo = require('../../models/qr_info'),
    {
        CODE_CONFLICT,
        MSG_CONFLICT_ERROR,
        CODE_SUCCESS
    } = require('../../globals/globals'),
    { sendError, sendSuccess, sendResponse } = require('../../utils/responses_utils');



module.exports = (req, res, next) => {
    const { _id } = req.params;
    const {
        company,
        location,
        date_info: {
            date_issued,
            date_expiry
        },
        qr_description,
        status } = req.body;

    const getInfoAndUpdate = () => {
        console.log(req.body)
        return qrInfo.findByIdAndUpdate(
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