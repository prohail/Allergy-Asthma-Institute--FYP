import React from "react";
import { Link } from "react-router-dom";
import patient from "../assets/patient.jpg";
import patient2 from "../assets/patient2.jpg";
import altest from "../assets/altest.jpg";
import treatment from "../assets/treatment.jpg";
import HomeSlider from "./HomeSlider";

export default function Home() {
  return (
    <>
      <div className="px-2 my-5 px-md-5 row">
        <div className="col-md-7 text-center col-12">
          <h1 className="display-3 fw-bold p-3">
            The Allergy & Asthma Institute
          </h1>
          <p className="p-3 fs-5 fw-normal">
            The Allergy and Asthma Institute is for the Allergy and Asthma
            Patients and this institute also works on the WHO projects. Dr Osman
            Yusuf is the Chief consultant for Allergy & Asthma Institute of
            Pakistan. Dr. Osman has also remained Consultant incharge of
            Affiliate Centre – WHO Collaborating Centre for Rhinitis & Asthma,
            Advisor to World Health Organization – Global Alliance against
            Respiratory Diseases (GARD).
          </p>
          <br />
          <Link to="/appointment">
            <button className="btn m-3 btn-primary rounded-5 fs-5 py-3 px-5">
              Book an Appointment
            </button>
          </Link>
        </div>
        <div className="col-md-5 col-12">
          <HomeSlider />
        </div>
      </div>

      <div className="treat row p-2 p-md-5 pb-5 m-md-5 m-2">
        <div className="col-md-1"></div>
        <div className="col-12 col-md-7">
          <h1 className="display-5 fw-bold px-3 py-1 mt-3">
            How we treat our Patients?
          </h1>
          <p className="p-3 fs-5 fw-normal">
            All patients attending our Islamabad or Lahore clinics are carefully
            evaluated with a detailed clinical history and a relevant physical
            examination. <br />
            Since the symptoms of allergy overlap with many other illnesses. Our
            specially trained physicians attempt to diagnose the patients
            condition with minimum of diagnostic test, except the absolute
            essential once, If required. <br /> <br />
            Our initial attempt is to treat the symptoms with preventative
            measures and simple pharmacological Treatment (Medicine)
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="border img-fluid border-dark w-100"
            alt=""
            src={patient}
          />
        </div>
      </div>

      <div className="row p-2 p-md-5 pb-5 m-md-5 m-2">
        <div className="col-md-4">
          <img
            className="border-start border-end border-3 border-dark img-fluid w-100"
            alt=""
            src={altest}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-7">
          <h1 className="display-5 fw-bold px-3 py-1 mt-5">
            Why do we perform Allergy Testing?
          </h1>
          <p className="p-3 fs-5 fw-normal">
            In Case a Simple trial of pharmacological treatment (Medicine) is
            unsuccessful,only then do we plan to advise or perform further
            tests, including allergy testing.
          </p>
        </div>
      </div>

      <div className="treat row p-2 p-md-5 pb-5 m-md-5 m-2">
        <div className="col-md-1"></div>
        <div className="col-12 col-md-7">
          <h1 className="display-5 fw-bold px-3 py-1 mt-3">
            What type of allergy testing do we perform?
          </h1>
          <p className="p-3 fs-5 fw-normal">
            The type of allergy testing depends on the history, symptoms,
            location, environment and life style of the patient. <br /> <br />
            The gold standard for the diagnoses of common allergic diseases is
            by skin prick testing. The allergens (substances, which cause
            allergy) to be tested are selected form a wide range of allergens
            available depending on the requirement of the patient. <br /> <br />
            Skin prick allergy testing can include between 30 to 80 tests in our
            session, and can last up to one hour.
          </p>
        </div>
        <div className="col-md-4">
          <img
            className="border mt-md-5 img-fluid border-dark w-100"
            alt=""
            src={treatment}
          />
        </div>
      </div>

      <div className="row p-2 p-md-5 pb-5 m-md-5 m-2">
        <div className="col-md-4">
          <img
            className="border-start border-end border-3 border-dark img-fluid w-100"
            alt=""
            src={patient2}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-7">
          <h1 className="display-5 fw-bold px-3 py-1 mt-5">
            What type of treatment do we provide?
          </h1>
          <p className="p-3 fs-5 fw-normal">
            Once an allergy test is suggestive of any specific substance causing
            the symptoms of the allergy, appropriate preventative and treatment
            measures are advised.
          </p>
        </div>
      </div>
    </>
  );
}
