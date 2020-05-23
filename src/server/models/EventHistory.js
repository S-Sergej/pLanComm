const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventHistorySchema = new Schema({
  title: String,
  logentry: String,
  date: Date,
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event"
  }
});

const EventHistory = mongoose.model("EventHistory", eventHistorySchema);

module.exports = EventHistory;