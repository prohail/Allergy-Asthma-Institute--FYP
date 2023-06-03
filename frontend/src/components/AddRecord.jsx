import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export default function AddRecord() {
  const [pdoc, setdoc] = useState("NoDoc");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [bill, setbill] = useState(0);
  const [pbranch, setbranch] = useState("NoBranch");
  const [userid, setuserid] = useState("");
  const [isloading, setisloading] = useState(false);
  const [msg, setmsg] = useState(null);

  const { user } = useAuthContext();

  const handlesubmit = (e) => {
    e.preventDefault();
    setisloading(true);
    axios
      .post(
        "/api/records",
        {
          title: title,
          doctor: pdoc,
          description: desc,
          branch: pbranch,
          totalBill: bill,
          userID: userid,
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
    setisloading(false);
    settitle("");
    setdesc("");
    setbill("");
    setuserid("");
    setmsg("Record Added");
    setbranch("NoBranch");
    setdoc("NoDoc");
    window.location.reload();
  };

  return (
    <div className="row mt-5 my-4">
      <div className="col-md-3"></div>
      <div className="col-md-6 col-12 text-center">
        {msg && (
          <span
            onClick={() => {
              setmsg(null);
            }}
            className="text-success pt-4 w-100"
          >
            <h2>{msg}</h2>
          </span>
        )}
        {!isloading && (
          <form onSubmit={handlesubmit} className="mx-auto pb-5 pt-3">
            <input
              type="text"
              value={title}
              className="w-75 form-control border-bottom my-2 border-0 border-secondary mx-auto fs-5 px-3 py-3"
              placeholder="Add a title"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <input
              type="text"
              value={desc}
              className="w-75 form-control border-bottom my-2 border-0 border-secondary mx-auto fs-5 px-3 py-3"
              placeholder="Add a Description"
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
            <input
              type="text"
              value={userid}
              className="w-75 form-control border-bottom my-2 border-0 border-secondary mx-auto fs-5 px-3 py-3"
              placeholder="Enter patient ID"
              onChange={(e) => {
                setuserid(e.target.value);
              }}
            />
            <input
              type="number"
              value={bill}
              className="w-75 form-control border-bottom my-2 border-0 border-secondary mx-auto fs-5 px-3 py-3"
              placeholder="Enter total Bill"
              onChange={(e) => {
                setbill(e.target.value);
              }}
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
              className="btn mt-5 btn-primary w-75 rounded-5 fs-4 py-3"
              type="submit"
              value="Send Request"
            />{" "}
          </form>
        )}
        {isloading && (
          <div className="dot-spinner mx-auto my-5">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        )}
      </div>
      <div className="col-md-3"></div>
    </div>
  );
}
