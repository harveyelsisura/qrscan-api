const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    moment = require('moment')

const user_accounts = new Schema(
    {
        user_level: { type: Number },
        user_id: { type: Number },
        personal_info: {
            last_name: { type: String, default: null },
            first_name: { type: String, default: null },
            middle_name: { type: String, default: null }
        },
        authentication: {
            email: { type: String, default: null },
            password: { type: String }
        },
        date_created: { type: Date, default: moment().subtract(4, 'h').format("l hh:mm a") },
        is_delete: { type: Boolean, default: false },
    }
)

module.exports = mongoose.model('userAccounts', user_accounts)