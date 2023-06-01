import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

export default function Appointment() {
  const [pdoc, setdoc] = useState("NoDoc");
  const [pbranch, setbranch] = useState("NoBranch");
  const [pdate, setdate] = useState("");

  const { user } = useAuthContext();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/appointments",
        {
          doctor: pdoc,
          branch: pbranch,
          prefDate: pdate,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setbranch("NoBranch");
    setdate("");
    setdoc("NoDoc");
  };

  return (
    <div className="row mt-5 my-4">
      <div className="col-md-3"></div>
      <div className="col-md-6 col-12 text-center">
        <h2 className="display-5 text-center fw-bold px-3 py-1">
          Request an
          <br />
          Appointment
        </h2>
        {user && (
          <>
            <h6 className="text-center fw-light pt-2 fs-5">
              Your Appointment will be confirmed subject to Availability
            </h6>

            <form onSubmit={handlesubmit} className="mx-auto pb-5 pt-3">
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
          </>
        )}
        {!user && (
          <div className="alert alert-warning text-center py-5 my-5">
            <h2>
              Please{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>{" "}
              First
            </h2>
          </div>
        )}
      </div>
      <div className="col-md-3"></div>
    </div>
  );
}
