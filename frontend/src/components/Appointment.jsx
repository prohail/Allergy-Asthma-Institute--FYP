import React, { useState } from "react";
import axios from "axios";

export default function Appointment() {
  const [pname, setname] = useState("");
  const [pemail, setemail] = useState("");
  const [pphone, setphone] = useState("");
  const [pdoc, setdoc] = useState("NoDoc");
  const [pbranch, setbranch] = useState("NoBranch");
  const [pdate, setdate] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/appointments", {
        patient: pname,
        doctor: pdoc,
        branch: pbranch,
        prefDate: pdate,
        phone: pphone,
        e_mail: pemail,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setname("");
    setbranch("NoBranch");
    setemail("");
    setdate("");
    setdoc("NoDoc");
    setphone("");
  };

  return (
    <div className="row mt-5 my-4">
      <div className="col-md-3"></div>
      <div className="col-md-6 col-12 text-center">
        <h1 className="display-4 text-center fw-bold px-3 py-1">
          Request an
          <br />
          Appointment
        </h1>
        <h6 className="text-center fw-light fs-4">
          Your Appointment will be confirmed subject to Availability
        </h6>

        <form onSubmit={handlesubmit} className="mx-auto">
          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            placeholder="Name"
            type="text"
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={pname}
          />

          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={pemail}
          />

          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            placeholder="Phone No."
            type="text"
            required
            minLength="11"
            maxLength="11"
            onChange={(e) => {
              setphone(e.target.value);
            }}
            value={pphone}
          />

          <select
            className="w-75 form-select border-bottom my-2 border-0 border-secondary mx-auto fs-5 px-3 py-3"
            placeholder="Select a Doctor"
            onChange={(e) => {
              setdoc(e.target.value);
            }}
            required
            value={pdoc}
            type="select"
          >
            <option value="NoDoc" selected disabled>
              Select a Doctor
            </option>
            <option value="Dr. Osman Yousuf">Dr. Osman Yousuf</option>
            <option value="Dr. Shahida Ashraf">Dr. Shahida Ashraf</option>
            <option value="Dr. Tanveer Anjum">Dr. Tanveer Anjum</option>
          </select>

          <select
            className="w-75 form-select border-bottom my-2 border-0 border-secondary mx-auto fs-5 px-3 py-3"
            placeholder="Select Branch"
            onChange={(e) => {
              setbranch(e.target.value);
            }}
            required
            value={pbranch}
            type="select"
          >
            <option value="NoBranch" selected disabled>
              Select a Branch
            </option>
            <option value="Islamabad">Islamabad</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karach (Affiliated Center)</option>
          </select>

          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            placeholder="Select Preffered Date"
            onChange={(e) => {
              setdate(e.target.value);
            }}
            required
            type="date"
            value={pdate}
          />

          <input
            className="btn mt-5 btn-primary w-75 rounded-5 fs-4 py-3"
            type="submit"
            value="Send Request"
          />
        </form>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
}
