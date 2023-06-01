import React from "react";
import Card from "react-bootstrap/Card";
import osman from "../assets/osman.jpg";
import tanveer from "../assets/tanveer.jpg";
import shahida from "../assets/shahida.jpg";

export default function Doctors() {
  return (
    <div className="row my-4 mx-5">
      <h2 className="display-5 text-center fw-bold px-3 py-1">
        Meet Our Doctors
      </h2>
      <p className="text-center fs-5">
        Our Doctors who are specialized in Allergy and Asthma
      </p>

      <div className="col px-3 m-3 doc">
        <Card>
          <Card.Img variant="top" src={osman} />
          <Card.Body>
            <Card.Title className="fw-bold">Dr. Osman Yousuf</Card.Title>
            <Card.Text>
              MBBS, MCPS (Pathology), M.Sc. (Immunology), Ph.D (Clinical
              Science), PGT Allergy (UK), FCPP (Pak), FAAAAI (USA), Fellow,
              American College of Allergy, Asthma, Immunology, FRCP
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col px-3 m-3 doc">
        <Card>
          <Card.Img variant="top" src={shahida} />
          <Card.Body>
            <Card.Title className="fw-bold">Dr. Shahida Ashraf</Card.Title>
            <Card.Text>
              MBBS (Pb), D.C.P (Allergy), <br />
              Dip WHO-GREAT (Torronto)
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col px-3 m-3 doc">
        <Card>
          <Card.Img variant="top" src={tanveer} />
          <Card.Body>
            <Card.Title className="fw-bold">Dr. Tanveer Anjum</Card.Title>
            <Card.Text>
              Immunologist MB BS, MPH(Allergy), PGT Allergy(WHO), Diploma
              GR&T(Canada)
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
