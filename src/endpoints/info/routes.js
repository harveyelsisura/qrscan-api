const api = module.parent.exports.api;
const { validateAppToken } = require('../../utils/security_utils');
const getAppInfo = require('./app_info'),
    addInfo = require('./add_info'),
    updateInfo = require('./update_info');


// GET INFO 
api.get({ path: '/qrscan/get_info' },
    // validateAppToken,
    getAppInfo
);
api.post({ path: '/qrscan/add_info' },
    // validateAppToken,
    addInfo
);
api.patch({ path: '/qrscan/update_info/:_id' },
    // validateAppToken,
    updateInfo
);