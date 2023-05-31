import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Footbar() {
  return (
    <div className='row display-7 bg-dark text-light p-5 pb-3'>
        <div className="col-12 col-md-3">
            <img className='img-fluid w-25' alt="" src={logo} /> <br /> <br />
            <p className="fs-3">The Allergy and Asthma Institute</p>
        </div>
        <div className="col-md-3 col-0"></div>
        <div className="col-md-2 col-4">
                <Link style={{textDecoration: "none"}} to="/" ><span className="fs-5 text-light nav-link px-2">Home</span> </Link> <br />
                <Link style={{textDecoration: "none"}} to="/doctors" ><span className="fs-5 text-light nav-link px-2">Doctors</span> </Link> <br />
                <Link style={{textDecoration: "none"}} to="/clinics" > <span className="fs-5 text-light px-2 nav-link">Clinics</span> </Link> <br />
                <Link style={{textDecoration: "none"}} to="/about" > <span className="fs-5 text-light px-2 nav-link">About</span> </Link>
        </div>
        <div className="col-md-2 col-6">
                <Link style={{textDecoration: "none"}} to="/appts" ><span className="fs-5 text-light nav-link px-2">All Appointments</span> </Link> <br />
                <Link style={{textDecoration: "none"}} to="/appointment" ><span className="fs-5 text-light nav-link px-2">Request Appointment</span> </Link> <br />
        </div>
        <div className="col-md-2 col-2">
                <Link style={{textDecoration: "none"}} to="/login" ><span className="fs-5 text-light nav-link px-2">Login</span> </Link> <br />
                <Link style={{textDecoration: "none"}} to="/signup" ><span className="fs-5 text-light nav-link px-2">Sign Up</span> </Link> <br />
        </div>
    </div>
  )
}
