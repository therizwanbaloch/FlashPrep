import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    credits: {
      type: Number,
      default: 100,
      min: 0
    },
    isCreditsAvailable: {
      type: Boolean,
      default: true
    },
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notes",
        default : []
      }
    ]
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
