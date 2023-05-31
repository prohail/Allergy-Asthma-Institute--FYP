import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleLogin = async () => {
    await login(email, password);
  };
  return (
    <div className="row my-5">
      <div className="col-md-3"></div>
      <div className="col-12 col-md-6 text-center">
        <h1 className="display-4 text-center fw-bold px-3 py-1">Login</h1>
        <p className="text-center fs-4">
          Enter Your Email and Password to login!
        </p>

        <form className="mx-auto">
          <input
            className="w-75 border-bottom my-2 border-0 border-secondary fs-5 px-3 py-3"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
          />
          <input
            className="w-75 border-bottom my-2 mb-4 border-0 border-secondary fs-5 px-3 py-3"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
          />
          <br />
          <a href="/forogt" className="link">
            Forgot Password?
          </a>
          <br />
          <input
            className="btn mt-4 btn-primary w-75 rounded-5 fs-4 py-3"
            type="submit"
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            value="Login"
          />
        </form>
        {error && <div className="alert alert-danger m-4">{error} </div>}
      </div>
      <div className="col-md-3"></div>
    </div>
  );
}
