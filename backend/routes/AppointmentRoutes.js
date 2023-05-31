const express = require('express')
const {
    CreateAppointment,
    GetAllAppointments,
    GetSingleAppointment,
    DeleteAppointment,
    UpdateAppointment,
    SearchAppointment
} = require('../Controllers/AppointmentController')
const router = express.Router()

//Get all appointments
router.get('/', GetAllAppointments)

//Get single appointment
router.get('/:id', GetSingleAppointment)


//Create new appointment
router.post('/', CreateAppointment)

//Delete appointment
router.delete('/:id', DeleteAppointment)

//Update appointment
router.put('/:id', UpdateAppointment)

module.exports = router