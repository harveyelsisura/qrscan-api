const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
moment = require('moment')

let timestamp = moment(new Date(Date.now())).add('8', 'h').format("l hh:mm a");
console.log(timestamp)
const qr_info = new Schema(
    {
        company: { type: String },
        location: { type: String },
        date_info: {
            date_issued: { type: Date },
            date_expiry: { type: Date }
        },
        qr_description: { type: String },
        status: { type: Number }, // 1 - Verified 2 - Expired 3 - Retired
        date_created: { type: Date, default: timestamp },
    }
)

module.exports = mongoose.model('qrInfo', qr_info)