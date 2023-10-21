import React, { useState } from "react";
import "./Auth.css";

function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  return (
    <div className="center-wrap">
      <div className="section text-center">
        <h4 className="mb-4 pb-3">Sign Up</h4>
        <div className="form-group">
          <input
            type="text"
            name="username"
            className="form-style"
            placeholder="Your Full Name"
            id="username"
            onChange={handleChange}
          />
          <i className="input-icon uil uil-user"></i>
        </div>
        <div className="form-group mt-2">
          <input
            type="email"
            name="user_email"
            className="form-style"
            placeholder="Your Email"
            id="user_email"
            onChange={handleChange}
          />
          <i className="input-icon uil uil-at"></i>
        </div>
        <div className="form-group mt-2">
          <input
            type="password"
            name="user_pass"
            className="form-style"
            placeholder="Your Password"
            id="user_pass"
            onChange={handleChange}
          />
          <i className="input-icon uil uil-lock-alt"></i>
        </div>
        <a href="#" className="btn mt-4">
          submit
        </a>
      </div>
    </div>
  );
}

export default SignUp;
