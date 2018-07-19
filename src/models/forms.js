const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
moment = require('moment')

let timestamp = moment(new Date(Date.now())).add('8', 'h').format("l hh:mm a");
const forms = new Schema(
    {
        forms: [],
        date_created: { type: Date, default: timestamp },
        is_delete: { type: Boolean, default: 0 }
    }
)

module.exports = mongoose.model('forms', forms)