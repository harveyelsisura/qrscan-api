const qrInfo = require("../../models/qr_info"),
  {
    CODE_CONFLICT,
    MSG_CONFLICT_ERROR,
    CODE_SUCCESS,
    CODE_NOT_FOUND
  } = require("../../globals/globals"),
  {
    sendError,
    sendSuccess,
    sendResponse
  } = require("../../utils/responses_utils");

module.exports = async function(req, res, next) {
  try {
    const { _id } = ObjectId(req.params);
    console.log(_id);
    qrInfo
      .findById({ _id })
      .then(data => {
        if (data) {
          sendSuccess(res, data, "Successfully Fetched");
        } else {
          sendResponse(res, {}, CODE_NOT_FOUND);
        }
      })
      .catch(err => {
        throw err;
      });
  } catch (err) {
    console.log(err);
  }
};
