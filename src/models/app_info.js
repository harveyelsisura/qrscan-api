const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
moment = require('moment')

const app_info = new Schema(
    {
        version: { type: String },
        faq: { type: String },
        privacy_policy: { type: String },
        about: { type: String },
        date_created: { type: Date, default: moment().subtract(4, 'h').format("l hh:mm a") },
    }
)

module.exports = mongoose.model('appInfo', app_info)