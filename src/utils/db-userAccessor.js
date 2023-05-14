const userModel = require("../models/userSchema");

class dbUserAccessor {


    checkUser = async (email, password) => {
        const user = await userModel.find({ "email": email, "pass": password });
        if (user.length > 0)
            return true;
        return false;
    }

    addUser = async (user) => {
        const u = new userModel(user);
        await u.save();
        return u;
    }

    getDetails = async (id) => {
        const userDetails = await userModel.find({ "_id": id })
        return userDetails;
    }

    updateUser = async (id, data) => {

        const a = await userModel.updateOne({ "_id": id }, { $set: { "firstName": data.firstName, "lastName": data.lastName, "pass": data.pass, "email": data.email, "phoneNumber": data.phoneNumber } })
        return a
    };


}
const dbUserAccessor1 = new dbUserAccessor();
module.exports = dbUserAccessor1;
