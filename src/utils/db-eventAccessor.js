const eventModel = require("../models/eventSchema");
class dbEventAccessor {

  search = async (varilbe) => {
    if (varilbe.title != null) {
      var titleFilter = varilbe.title;
      varilbe.title = RegExp(titleFilter);
    }

    if (varilbe.discription != null) {
      var discFilter = varilbe.discription;
      varilbe.discription = RegExp(discFilter);
    }

    var event = await eventModel.find(varilbe)
    return event
  }


  eventDetails = async (id) => {
    const eventDetails = await eventModel.find({ "_id": id })
    return eventDetails;
  };

  addEvent = async (event) => {
    const e = new eventModel(event);
    await e.save();
    return e;
  };

  updateEvent = async (id, data) => {
    const event = await eventModel.updateOne({ "_id": id }, { $set: { "userId": data.userId, "title": data.title, "description": data.description, "date": data.date } })
    return event;
  };

  delete = async (id) => {
    const delitedItem = id
    await eventModel.deleteOne({ "_id": id })
    return delitedItem
  };

}



const dbEventAccessor1 = new dbEventAccessor();
module.exports = dbEventAccessor1;
