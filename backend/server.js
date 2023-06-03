const express = require("express");
const bodyParser = require("body-parser");
const AppointmentRoutes = require("../backend/routes/AppointmentRoutes");
const userRoutes = require("../backend/routes/userRoutes");
const recordRoutes = require("../backend/routes/recordRoutes");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

app.use("/api/appointments", AppointmentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/records", recordRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
