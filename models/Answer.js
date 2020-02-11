const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  title: String,
  description: String,
  guestbook: {
    type: Schema.Types.ObjectId,
    ref: "Guestbook"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
},{
  timestamps: true
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
