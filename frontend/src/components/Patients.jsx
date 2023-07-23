import React, { useState, useEffect } from "react";
import axios from "axios";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("/api/user/patients");
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterPatients = () => {
    return patients.filter((patient) => {
      const value = patient[searchCriteria].toLowerCase();
      return value.includes(searchQuery.toLowerCase());
    });
  };

  return (
    <div className="row my-4 mx-5">
      <h2 className="display-5 text-center fw-bold px-3 py-1">Patients Data</h2>
      <div className="col-md-6">
        <div className="row mb-3">
          <div className="col-md-5">
            <label htmlFor="searchCriteria" className="form-label">
              Search Criteria:
            </label>
            <select
              id="searchCriteria"
              className="form-select"
              value={searchCriteria}
              onChange={handleSearchCriteriaChange}
            >
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="_id">ID</option>
            </select>
          </div>
          <div className="col-md-7">
            <label htmlFor="searchQuery" className="form-label">
              Search Query:
            </label>
            <input
              type="text"
              id="searchQuery"
              className="form-control"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filterPatients().map((patient) => (
              <tr key={patient._id}>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient._id}</td>
                <td>{patient.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
