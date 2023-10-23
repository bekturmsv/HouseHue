import React, { useState } from "react";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

export const Auth = () => {
  const [isChecked, setIsChecked] = useState(
    window.location.pathname === "/sign-up"
  );
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    navigate(isChecked ? "/sign-in" : "/sign-up");
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row  justify-content-center pt-6">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Sign In </span>
                <span>Sign Up</span>
              </h6>

              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />

              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <SignIn />
                  </div>

                  <div className="card-back">
                    <SignUp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
