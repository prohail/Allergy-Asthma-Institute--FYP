const Appointment = require("../models/AppointmentModel");
const mongoose = require("mongoose");

//Get all Appointments
const GetAllAppointments = async (req, res) => {
  const resPerPage = 5;
  const page = req.query.page || 1;
  if (req.user.isAdmin) {
    const appointments = await Appointment.find()
      .sort({ createdAt: -1 })
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage);

    const numTotal = await Appointment.count();
    const obj = {
      Perpage: resPerPage,
      page: page,
      Total: numTotal,
      Data: appointments,
    };

    const pageState = await paginate(obj);
    res.status(200).json(pageState);
  }
  if (!req.user.isAdmin) {
    const userID = req.user._id;
    const appointments = await Appointment.find({ userID })
      .sort({ createdAt: -1 })
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage);

    const numTotal = await Appointment.count();
    const obj = {
      Perpage: resPerPage,
      page: page,
      Total: numTotal,
      Data: appointments,
    };

    const pageState = await paginate(obj);
    res.status(200).json(pageState);
  }
};
const paginate = async (req) => {
  const prev = req.page * 1 - 1 == 0 ? null : req.page * 1 - 1;
  var totalPages = Math.ceil((req.Total * 1) / (req.Perpage * 1));
  const nextPg = req.page * 1 + 1 <= totalPages ? req.page * 1 + 1 : null;
  const pageState = {
    data: req.Data,
    current_page: req.page,
    pages: totalPages,
    per_page: req.Perpage,
    total: req.Total,
    prev_page: prev,
    next_page: nextPg,
  };

  return pageState;
};

//Get single appointment
const GetSingleAppointment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return res.status(404).json({ error: "Appointment Not Found" });
  }
  res.status(200).json(appointment);
};

//Create new Appointment
const CreateAppointment = async (req, res) => {
  const { branch, status, doctor, prefDate } = req.body;

  try {
    const userID = req.user._id;
    const patient = req.user.name;
    const e_mail = req.user.email;
    const phone = req.user.phone;
    const appointment = await Appointment.create({
      branch,
      status,
      patient,
      doctor,
      e_mail,
      phone,
      prefDate,
      userID,
    });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete appointment
const DeleteAppointment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const appointment = await Appointment.findOneAndDelete({ _id: id });
  if (!appointment) {
    return res.status(404).json({ error: "Appointment Not Found" });
  }
  res.status(200).json(appointment);
};

//Update appointment
const UpdateAppointment = async (req, res) => {
  console.log("UpdateAppointment called with ID:", req.params.id);
  console.log("Data received:", req.body);

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const appointment = await Appointment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  console.log("Updated appointment:", appointment);
  if (!appointment) {
    return res.status(404).json({ error: "Appointment Not Found" });
  }
  res.status(200).json(appointment);
};

module.exports = {
  CreateAppointment,
  GetAllAppointments,
  GetSingleAppointment,
  DeleteAppointment,
  UpdateAppointment,
};
