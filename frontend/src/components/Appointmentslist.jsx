import React, { useEffect, useState } from "react";
import Apptcard from "./Apptcard";
import apiService from "../Services/apiService";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

export default function Appointmentlist() {
  const [appts, setAppts] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await apiService.getAllAppointments(currentPage, {
          user,
        });
        setAppts(response.data);
        setTotalPages(response.pages);
        setisloading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    if (user) {
      fetchAppointments();
    }
  }, [currentPage, user]);

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
          {!isloading && (
            <>
              <button
                className="btn btn-outline-dark"
                onClick={() => window.location.reload()}
              >
                <h6 className="display-7 text-start">Reload</h6>
              </button>
              <Apptcard appts={appts} setAppts={setAppts} />
            </>
          )}
        </div>
        {!user && (
          <div className="alert alert-warning text-center my-5 py-5">
            <h2>
              Please{" "}
              <Link to="/login" className="text-decoration-none">
                Login{" "}
              </Link>
              First
            </h2>
          </div>
        )}
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
        {isloading && (
          <div className="alert mx-auto text-center w-25 alert-warning">
            <p>
              If loading takes too long,
              <br /> log in again
            </p>
          </div>
        )}
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}
