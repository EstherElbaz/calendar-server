const express = require('express');
const pRouterEvent = require('./routes/event_rout');
const pRouterUser = require('./routes/user_rout');
const logAccessor= require('./utils/db-logAccessor');
const cors = require('cors');
const { connectToServer } = require("./utils/db-accessor");

const app = express();

app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const init = async () => {
	await connectToServer();
};
app.use("/users",pRouterUser);
app.use("/events",pRouterEvent);

init();



app.use(async(err, req, res, next)=>{
	await logAccessor.writeToLog(err, req.url);
	res.status(200).send('An Error Happened. we are working on the fix');
})

app.use((req, res, next)=>{
	res.status(404).send("Route Not Found!!");
})





app.listen(4001, () => {
	console.log(`Server Started at ${4001}`)

});