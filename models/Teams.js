const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  title: String,
  description: String,
  users: [{
    type: Schema.Types.ObjectId,
    ref: "Project"
  }],
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event"
  }
},
{
  timestamps: true
}
);

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
