const Record = require("../models/recordsModel");
const mongoose = require("mongoose");

//Get all Records
const GetAllRecords = async (req, res) => {
  const resPerPage = 5;
  const page = req.query.page || 1;
  if (req.user.isAdmin) {
    const records = await Record.find()
      .sort({ createdAt: -1 })
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage);

    const numTotal = await Record.count();
    const obj = {
      Perpage: resPerPage,
      page: page,
      Total: numTotal,
      Data: records,
    };

    const pageState = await paginate(obj);
    res.status(200).json(pageState);
  }
  if (!req.user.isAdmin) {
    const userID = req.user._id;
    const records = await Record.find({ userID })
      .sort({ createdAt: -1 })
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage);

    const numTotal = await Record.count();
    const obj = {
      Perpage: resPerPage,
      page: page,
      Total: numTotal,
      Data: records,
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

//Get single record
const GetSingleRecord = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const record = await Record.findById(id);
  if (!record) {
    return res.status(404).json({ error: "Record Not Found" });
  }
  res.status(200).json(record);
};

//Create new Record
const CreateRecord = async (req, res) => {
  const { title, doctor, description, branch, totalBill, userID } = req.body;

  try {
    const record = await Record.create({
      title,
      doctor,
      description,
      branch,
      totalBill,
      userID,
    });
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete record
const DeleteRecord = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const record = await Record.findOneAndDelete({ _id: id });
  if (!record) {
    return res.status(404).json({ error: "Record Not Found" });
  }
  res.status(200).json(record);
};

//Update record
const UpdateRecord = async (req, res) => {
  console.log("UpdateRecord called with ID:", req.params.id);
  console.log("Data received:", req.body);

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  const record = await Record.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  console.log("Updated record:", record);
  if (!record) {
    return res.status(404).json({ error: "Record Not Found" });
  }
  res.status(200).json(record);
};

module.exports = {
  CreateRecord,
  GetAllRecords,
  GetSingleRecord,
  DeleteRecord,
  UpdateRecord,
};
