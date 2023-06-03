import React, { useEffect, useState } from "react";
import ShowRecords from "./ShowRecords";
import AddRecord from "./AddRecord";
import { useAuthContext } from "../hooks/useAuthContext";
import apiService from "../Services/apiService";

export default function Records() {
  const [records, setRecords] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await apiService.getAllRecords(currentPage, {
          user,
        });
        setRecords(response.data);
        setTotalPages(response.pages);
        setisloading(false);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };
    if (user) {
      fetchRecords();
    }
  }, [currentPage, user]);

  const handlePagination = (page) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setCurrentPage(page);
  };
  const [show, setshow] = useState(true);

  return (
    <div className="px-2 my-3 px-md-5 pb-5 container">
      <h2 className="display-6 text-center fw-bold px-3 py-1">
        Patient Records
      </h2>
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

      <div className="row justify-content-between py-3 text-center">
        <div className="col">
          <button
            onClick={() => {
              setshow(true);
            }}
            className="btn btn-primary"
          >
            Show Records
          </button>
        </div>
        <div className="col">
          <button
            onClick={() => {
              setshow(false);
            }}
            className="btn btn-outline-primary"
          >
            Add a Record
          </button>
        </div>
      </div>

      <div className="container py-1 border rounded bg-light">
        {show && (
          <>
            <ShowRecords record={records} setrecord={setRecords} />
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
          </>
        )}
        {!show && <AddRecord />}
      </div>
    </div>
  );
}
