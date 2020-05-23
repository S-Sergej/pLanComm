const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestbookSchema = new Schema({
  title: String,
  entrie: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  answer: [{
    type: Schema.Types.ObjectId,
    ref: "Answer"
  }]
}, {
  timestamps: true
});

const Guestbook = mongoose.model("Guestbook", guestbookSchema);

module.exports = Guestbook;
