const mongoose = require("mongoose");
const { isStrongPassword, isEmail } = require("validator")

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    pass: {
        type: String,
        required: true,
        validate: [isStrongPassword, 'Please enter a strong password, with 8 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    }

});

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;

