import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import "./Auth.css";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess());
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="center-wrap">
      <div className="section text-center">
        <h4 className="mb-4 pb-3 text-amber-100 text-xl">Sign In</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <input
              type="email"
              name="email"
              className="form-style"
              placeholder="Your Email"
              id="login_email"
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
              id="login_password"
              onChange={handleChange}
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <a href="#" className="btn mt-4">
            <button disabled={loading} type="submit">
              {loading ? "Loading..." : "Sign In"}
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

export default SignIn;
