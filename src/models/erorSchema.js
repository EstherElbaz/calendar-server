const mongoose = require("mongoose");

const ErrorSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    },
    errorTime: {
        type: Date,
        required: true
    }
});

const errorModel = mongoose.model("calendarLogs", ErrorSchema);
module.exports = errorModel;

