import React from "react";
import Card from "react-bootstrap/Card";

export default function ShowRecords({ record, setrecord }) {
  return (
    <>
      {record &&
        record.map((rec, i) => (
          <Card className="my-3 p-2" key={rec._id}>
            <Card.Body>
              <Card.Title>
                {i + 1} - Title: {rec.title}
              </Card.Title>
              <Card.Body className="row">
                <div className="col-10">
                  <Card.Text>
                    <strong className="my-1">Patient ID: </strong>
                    {rec.userID} <br />
                    <strong className="my-1">Branch: </strong>
                    {rec.branch} <br />
                    <strong className="my-1">Doctor: </strong> {rec.doctor}{" "}
                    <br />
                    <strong className="my-1">Created At: </strong>{" "}
                    {rec.createdAt} <br />
                    <strong className="my-1">Record ID: </strong> {rec._id}{" "}
                    <br />
                    <strong className="my-1">Description: </strong>{" "}
                    {rec.description} <br />
                  </Card.Text>
                </div>
                <div className="col-2">
                  <Card.Text></Card.Text>
                </div>
              </Card.Body>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
