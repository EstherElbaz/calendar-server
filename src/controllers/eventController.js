const { db } = require("../models/eventSchema.js");
const DB = require("../utils/db-eventAccessor.js")

class eventController {

  search = async (req, res, next) => {
    try {
      const varilbe = req.query;
      const varilbeToSend = await DB.search(varilbe);
      res.send(varilbeToSend);
    }
    catch (ex) {
      next(ex);
    }
  };

  eventDetails = async (req, res, next) => {
    try {
      const id = req.params.eventId;
      const ans = await DB.eventDetails(id);
      res.send(ans);
    }
    catch (ex) {
      next(ex);
    }
  };

  addEvent = async (req, res, next) => {
    try {
      const event = req.body;
      const newEvent = await DB.addEvent(event);
      res.send("event " + newEvent.title + " added successfully")
    }
    catch (ex) {
      next(ex);
    }
  };

  updateEvent = async (req, res, next) => {
    try {
      const eventID = req.params.eventId;
      const data = req.body
      console.log(eventID + " " + data);
      var updateEvent = await DB.updateEvent(eventID, data);
      console.log(updateEvent);
      res.send(updateEvent);
    }
    catch (ex) {
      next(ex); כ
    }
  };

  delete = async (req, res, next) => {
    try {
      const delitedItem = await DB.delete(req.params.eventId);
      res.send(delitedItem);
    }
    catch (ex) {
      next(ex);
    }
  };

}

module.exports = eventController;