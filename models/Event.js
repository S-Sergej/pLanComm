const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game"
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  subscriber: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;