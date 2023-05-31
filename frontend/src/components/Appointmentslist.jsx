import React, { useEffect, useState } from "react";
import Apptcard from "./Apptcard";
import apiService from "../Services/apiService";

export default function Appointmentlist() {
  const [appts, setAppts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await apiService.getAllAppointments(currentPage);
        setAppts(response.data);
        setTotalPages(response.pages);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [currentPage]);

  const handlePagination = (page) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setCurrentPage(page);
  };

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col">
        <div className="my-4">
          <h1 className="display-4 text-center fw-bold px-3 py-1">
            All Appointments
          </h1>
          <Apptcard appts={appts} setAppts={setAppts} />
        </div>
        <div className="text-center mx-auto">
          {currentPage > 1 && (
            <button
              className="btn btn-outline-dark m-2 py-3 px-4 rounded-circle mb-5"
              onClick={() => handlePagination(currentPage - 1)}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
          )}

          {currentPage < totalPages && (
            <button
              className="btn btn-outline-dark m-2 py-3 px-4 rounded-circle mb-5"
              onClick={() => handlePagination(currentPage + 1)}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}
