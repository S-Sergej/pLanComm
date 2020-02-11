const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventname: String,
  description: String,
  eventdate: Date,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ],
  ownerid: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  ownername: String,
  subscriber: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;