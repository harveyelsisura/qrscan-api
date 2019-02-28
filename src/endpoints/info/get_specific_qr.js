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
    const { _id } = req.params;
    console.log("QR ID", _id);
    qrInfo
      .findById({ _id })
      .then(data => {
        if (data) {
          console.log("SUCCESS", data);
          sendSuccess(res, data, "Successfully Fetched");
        } else {
          console.log("ERROR");
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
