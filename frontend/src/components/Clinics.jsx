import React from "react";
import masood from "../assets/masood.jpg";
import isbBranch from "../assets/isbBranch.jpg";

export default function Clinics() {
  return (
    <div className="px-2 my-5 mx-md-5 px-md-5 row">
      <h2 className="display-5 fw-bold px-3 py-1">
        The Allergy & Asthma Clinics
      </h2>
      <div className="pe-5">
        <p className="ps-3 pe-5 py-2 fs-5 fw-normal">
          The Allergy and Asthma Clinics, are the Clinical part of the Allergy &
          Asthma Institute Pakistan. <br /> <br />
          This is the only dedicated research institute for allergic diseases in
          the country Established in 1993, we proudly provide state of the art
          allergy diagnostic and treatment facilities for all types of allergic
          diseases.
          <br /> <br />
          Our main center is located in Islamabad with a second center in
          Lahore. Our affiliated centers are in Karachi and Multan, also
          provides services for the diagnostics and treatment of allergic
          patients.
        </p>
      </div>
      <h2 className="display-5 fw-bold px-3 py-1">Main Clinics:</h2>
      <div className="col-12 col-md-5 mx-0 px-1">
        <h3 className="fs-3 text-left fw-bold px-3 py-1">Islamabad</h3>
        <p className="px-3 py-2 fs-5 fw-normal">
          House 275 Gomal Road E-7 <br />
          Islamabad
          <br />
          <br />
          (051) 2654445
        </p>
        <img
          className="border border-secondary w-100 m-2"
          src={isbBranch}
          alt="Main Ofiice"
        />
      </div>

      <div className="d-md-none">
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="col d-none d-md-block col-1"></div>

      <div className="col-12 col-md-5 mx-0 px-1">
        <h3 className="fs-3 text-left fw-bold px-3 py-1">Lahore</h3>
        <p className="px-3 py-2 fs-5 fw-normal">
          Masood Hospital, <br />
          Lahore
          <br />
          <br />
          (042) 111-627-663
        </p>
        <img
          className="border border-secondary w-100 m-2"
          src={masood}
          alt="Masood Hospital"
        />
      </div>

      <div className="d-md-none">
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <h2 className="display-5 fw-bold px-3 py-1 mt-3">Affiliated Center:</h2>
      <h3 className="fs-3 text-left fw-bold px-3 py-1">Karachi</h3>
      <p className="px-3 py-2 fs-5 fw-normal">
        S.N.C.C, 3, 4 Shaheed-e-Millat Road, <br />
        Karachi
        <br />
        <br />
        (021) 34538560
      </p>
    </div>
  );
}
