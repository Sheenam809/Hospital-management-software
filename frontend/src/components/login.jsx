 import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom"; // ✅ added this

const Login = () => {
  const navigate = useNavigate(); // ✅ added this

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    navigate("/dashboard"); // ✅ redirect to dashboard
  };

  return (
    <div className="login-component">
      <div className="login-form">
        <h2 className="text-center"> Login</h2>
        <h4 className="text-center"> Login to your Account</h4>

        <form onSubmit={handleSubmit}> {/* ✅ added onSubmit */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">remember me </label>
          </div>

          <div>
            <a href="#" className="reset-link">Reset Password ?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign in</button>
        </form>

      </div>
    </div>
  );
};

export default Login;
