const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
  title: String,
  description: String,
  genre: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
},
{
  timestamps: true
}
);

const Game = mongoose.model("Game", gamesSchema);

module.exports = Game;
