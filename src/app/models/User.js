import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Please add a username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please add a email"],
    },
    password: {
      type: String,
      required: [true, "Please add a pass"],
    },
  },
  { timestamps: true }
);

// export default mongoose.model("User", userSchema);
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
