const { CODE_SERVER_ERROR, CODE_SUCCESS } = require ('../globals/globals')

const sendError = (res, error, msg) => {
    res.send(500, {
        code: CODE_SERVER_ERROR,
        msg,
        error
    })
};


const sendSuccess = (res, data, msg) => {
    res.send(200, {
        code: CODE_SUCCESS,
        data,
        msg,
    });
};


const sendResponse = (res, status, code, msg) => {
    res.send(status, {
        code,
        msg
    });
};


module.exports = {
    sendError,
    sendSuccess,
    sendResponse
}