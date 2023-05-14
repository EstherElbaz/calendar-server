const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";
var dbName = "calendar";


module.exports = {
	connectToServer: async () => {
		try {
			await mongoose.connect(`${url}/${dbName}`);
			console.log('Connected successfully to db server by mongoose');
		} catch (error) {
			console.error(error);
		}
	}

};