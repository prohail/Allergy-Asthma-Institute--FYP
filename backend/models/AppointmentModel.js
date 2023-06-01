const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    branch: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    patient: {
      type: String,
      required: true,
    },
    e_mail: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    doctor: {
      type: String,
      required: true,
    },
    prefDate: {
      type: Date,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
