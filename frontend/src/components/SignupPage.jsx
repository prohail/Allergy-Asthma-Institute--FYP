import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const { signup, isloading, error } = useSignUp();

  const postform = async () => {
    if (pass === pass2) {
      await signup(name, email, phone, pass);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-md-3"></div>
      <div className="col-12 col-md-6 text-center">
        <h1 className="display-4 text-center fw-bold px-3 py-1">
          Create new Account
        </h1>
        <p className="text-center fs-4">
          Enter the Requested Information to Create an Account!
        </p>
        {error && <div className="alert alert-danger">{error}</div>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postform();
          }}
          className="mx-auto"
        >
          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            required
            value={name}
            placeholder="Full Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            required
            value={email}
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            required
            value={phone}
            placeholder="Phone No."
            type="text"
            maxLength="11"
            minLength="11"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            className="w-75 border-bottom my-2 mb-4 border-0 border-secondary fs-5 px-3 py-3"
            required
            value={pass}
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <input
            className="w-75 border-bottom my-2 mb-4 border-0 border-secondary fs-5 px-3 py-3"
            required
            value={pass2}
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => {
              setPass2(e.target.value);
            }}
          />{" "}
          <br />
          <p className="text-secondary">
            Already have an account? <Link to="/login">login</Link>{" "}
          </p>{" "}
          <br />
          <input
            className="btn mb-5 btn-primary w-75 rounded-5 fs-4 py-3"
            type="submit"
            disabled={isloading}
            value="Sign Up"
          />
        </form>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
}
