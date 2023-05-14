const { db } = require("../models/userSchema.js");
const DB = require("../utils/db-userAccessor.js")

class usersController {

    checkUser = async (req, res, next) => {
        try {
            const email = req.query.email;
            const password = req.query.pass;
            const ans = await DB.checkUser(email, password);
            res.send(ans);
        }
        catch (ex) {
            next(ex);
        }
    }

    addUser = async (req, res, next) => {
        try {
            const user = req.body;
            const newUser = await DB.addUser(user);
            console.log(user);
            res.send("wellcome to  " + newUser.firstName + " " + newUser.lastName)
        }
        catch (error) {
            next(error)
        }

    }

    getDetails = async (req, res, next) => {
        try {
            const id = req.params.userId;
            const ans = await DB.getDetails(id);
            res.send(ans);
        }
        catch (error) {
            next(error)
        }
    }

    updateUser = async (req, res, next) => {
        try {
            const id = req.params.userId;
            const data = req.body;
            const updatedUser = await DB.updateUser(id, data);
            res.send(updatedUser);
        }
        catch (error) {
            next(error)
        }
    }
}

module.exports = usersController;