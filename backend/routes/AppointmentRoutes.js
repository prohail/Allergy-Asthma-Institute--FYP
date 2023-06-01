const express = require("express");
const {
  CreateAppointment,
  GetAllAppointments,
  GetSingleAppointment,
  DeleteAppointment,
  UpdateAppointment,
  SearchAppointment,
} = require("../Controllers/AppointmentController");
const requireAuth = require("../middlwares/requireAuth");

const router = express.Router();
router.use(requireAuth);

//Get all appointments
router.get("/", GetAllAppointments);

//Get single appointment
router.get("/:id", GetSingleAppointment);

//Create new appointment
router.post("/", CreateAppointment);

//Delete appointment
router.delete("/:id", DeleteAppointment);

//Update appointment
router.put("/:id", UpdateAppointment);

module.exports = router;
