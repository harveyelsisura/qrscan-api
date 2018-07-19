const api = module.parent.exports.api;
const { validateAppToken } = require('../../utils/security_utils');
const getAppInfo = require('./app_info'),
    addInfo = require('./add_info'),
    updateInfo = require('./update_info'),
    getQrInfo = require('./qr_info'),
    addQrInfo = require('./add_qr-info'),
    updateQrInfo = require('./update_qr-info'),
    deleteQr = require('./delete_qr'),
    specificQrInfo = require('./get_specific_qr');


// APP INFO 
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

// QR INFO
api.get({ path: '/qrscan/qr_info' },
    // validateAppToken,
    getQrInfo
);
api.get({ path: '/qrscan/qr_specific_info/:_id' },
    // validateAppToken,
    specificQrInfo
);
api.post({ path: '/qrscan/add_qr-info' },
    // validateAppToken,
    addQrInfo
);
api.patch({ path: '/qrscan/update_qr-info/:_id' },
    // validateAppToken,
    updateQrInfo
);
api.del({ path: '/qrscan/delete-qr/:_id' },
    // validateAppToken,
    deleteQr
);