const express = require("express");
const {
  CreateRecord,
  GetAllRecords,
  GetSingleRecord,
  DeleteRecord,
  UpdateRecord,
} = require("../Controllers/recordController");
const requireAuth = require("../middlwares/requireAuth");

const router = express.Router();
router.use(requireAuth);

//Get all records
router.get("/", GetAllRecords);

//Get single record
router.get("/:id", GetSingleRecord);

//Create new record
router.post("/", CreateRecord);

//Delete record
router.delete("/:id", DeleteRecord);

//Update record
router.put("/:id", UpdateRecord);

module.exports = router;
