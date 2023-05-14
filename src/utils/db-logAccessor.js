const errorModel = require("../models/erorSchema");
class dbLogsAccessor {

    writeToLog = async (error, url) => {
        const errorToLog = {
            message: error.message,
            stack: error.stack,
            errorTime: new Date(),
            url: url
        };
        const log = new errorModel(errorToLog)
        await log.save();
    }

}

const dbLogAccessor1 = new dbLogsAccessor();
module.exports = dbLogAccessor1;
