const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({

    userId: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },

    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },

    date: {
        type: Date,
        required: true
    }
});

const eventModel = mongoose.model("events", EventSchema);
module.exports = eventModel;