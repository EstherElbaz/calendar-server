const express = require('express');
const EventController = require('../controllers/eventController');

const eventRouter = express.Router();

const eventController = new EventController();



eventRouter.get("/",eventController.search);//שליפת אירוע 

eventRouter.get("/:eventId",eventController.eventDetails);//שליפת פרטי אירוע

eventRouter.post("/",eventController.addEvent);//הוספת פרטי אירוע

eventRouter.put("/:eventId",eventController.updateEvent);//עדכון פרטי אירוע

eventRouter.delete("/:eventId",eventController.delete);// מחיקת אירוע


module.exports = eventRouter;


