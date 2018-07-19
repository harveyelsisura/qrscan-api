const api = module.parent.exports.api;
const { validateAppToken } = require('../../utils/security_utils');
const formsUpload = require('./forms_upload');

api.post({ path: '/qrscan/forms_upload' },
    // validateAppToken,
    formsUpload
);