import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="center-wrap">
      <div className="section text-center">
        <h4 className="mb-4 pb-3">Sign Up</h4>
        <form action="" onSubmit={handleSubmit}>
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
              name="email"
              className="form-style"
              placeholder="Your Email"
              id="email"
              onChange={handleChange}
            />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              name="password"
              className="form-style"
              placeholder="Your Password"
              id="password"
              onChange={handleChange}
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <a href="#" className="btn mt-4">
            <button disabled={loading} type="submit">
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </a>
        </form>
        <p className="mb-0 mt-4 text-center">
          {error && <span className="text-red-500 mt-5">{error}</span>}
        </p>
      </div>
    </div>
  );
}

export default SignUp;
