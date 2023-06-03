const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    totalBill: {
      type: Number,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", recordSchema);
