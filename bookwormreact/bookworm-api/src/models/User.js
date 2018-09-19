import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//TODO: add uniqueness and email validations to email field
const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

schema.method.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

export default mongoose.model("User", schema);
