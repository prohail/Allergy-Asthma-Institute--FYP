import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Apptcard({ appts, setAppts }) {
  const { user } = useAuthContext();
  const markBooked = async (id) => {
    const res = await axios.put(
      `/api/appointments/${id}`,
      {
        status: "Booked",
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (res.status === 200) {
      const updatedAppt = res.data;
      setAppts((prevAppts) =>
        prevAppts.map((appt) =>
          appt._id === updatedAppt._id ? updatedAppt : appt
        )
      );
    }
    window.location.reload();
  };

  const markCompleted = async (id) => {
    const res = await axios.put(
      `/api/appointments/${id}`,
      {
        status: "Completed",
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (res.status === 200) {
      const updatedAppt = res.data;
      setAppts((prevAppts) =>
        prevAppts.map((appt) =>
          appt._id === updatedAppt._id ? updatedAppt : appt
        )
      );
    }
    window.location.reload();
  };

  return (
    <>
      {appts &&
        appts.map((appt, i) => (
          <Card className="my-3 p-2" key={appt._id}>
            <Card.Body>
              <Card.Title>
                {i + 1} - Patient: {appt.patient}
                <Alert
                  variant={
                    appt.status === "Pending"
                      ? "warning"
                      : appt.status === "Booked"
                      ? "info"
                      : "success"
                  }
                  className="my-1 d-inline mx-5 fs-5 p-0 text-center"
                >
                  {appt.status}
                </Alert>
              </Card.Title>
              <Card.Body className="row">
                <div className="col-10">
                  <Card.Text>
                    <strong className="my-1">Branch: </strong>
                    {appt.branch} <br />
                    <strong className="my-1">Doctor: </strong> {appt.doctor}{" "}
                    <br />
                    <strong className="my-1">Requested At: </strong>{" "}
                    {appt.createdAt} <br />
                    <strong className="my-1">Patient Email: </strong>{" "}
                    {appt.e_mail} <br />
                    <strong className="my-1">Patient Phone: </strong>{" "}
                    {appt.phone} <br />
                    <strong className="my-1">Appointment ID: </strong>{" "}
                    {appt._id} <br />
                  </Card.Text>
                </div>
                <div className="col-2">
                  <Card.Text></Card.Text>
                </div>
              </Card.Body>
            </Card.Body>
            <div className="d-flex my-1 mx-md-auto">
              <Button
                onClick={() => markBooked(appt._id)}
                className="py-2 m-1"
                variant="primary"
              >
                Mark as Booked
              </Button>
              <Button
                onClick={() => markCompleted(appt._id)}
                className="py-2 m-1"
                variant="success"
              >
                Mark as Completed
              </Button>
            </div>
          </Card>
        ))}
    </>
  );
}
