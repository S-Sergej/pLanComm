const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    isVerified: { type: Boolean, default: false },
    passwordResetToken: String,
    passwordResetExpires: Date,
	  password: String,
    googleID: String,
    githubId: String,
    notify: {type: Boolean, default: false },
    avatarURL: {
      type: String,
      default: "https://cdn.onlinewebfonts.com/svg/img_74993.png"
    },
    userType: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
