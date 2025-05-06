import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BaseAPIURL } from "../API/base";
import Loader from "./global-components/loader";
import AuthWrapper from "./AuthWrapper";

const Signup = () => {
  let history = useHistory();
  const [loading, setIsLoading] = useState(false);
  const [signupDetails, setsignupDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handlesignup = () => {
    setIsLoading(true);
    let path = `/`;
    fetch(BaseAPIURL + "account/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("wat_token", data.token);
          history.push(path);
          setIsLoading(false);
          toast.success("Account Created Succesfully");
        } else {
          setIsLoading(false);
          toast.error("Email already exist");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthWrapper>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="login-content">
          <h2 style={{ textAlign: "center" }}>Signup</h2>

          <div className="col-lg-12">
            <form action="#">
              <div className="col-lg-12">
                <label className="single-input-wrap">
                  <span className="single-input-title">Email</span>
                  <input
                    type="email"
                    placeholder="Enter name"
                    value={signupDetails.email}
                    onChange={(e) =>
                      setsignupDetails({
                        ...signupDetails,
                        email: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div className="col-lg-12">
                <label className="single-input-wrap">
                  <span className="single-input-title">First Name</span>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    required
                    value={signupDetails.firstName}
                    onChange={(e) =>
                      setsignupDetails({
                        ...signupDetails,
                        firstName: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div className="col-lg-12">
                <label className="single-input-wrap">
                  <span className="single-input-title">Last Name</span>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    required
                    value={signupDetails.lastName}
                    onChange={(e) =>
                      setsignupDetails({
                        ...signupDetails,
                        lastName: e.target.value,
                      })
                    }
                  />
                </label>
              </div>
              <div className="col-lg-12">
                <label className="single-input-wrap">
                  <span className="single-input-title">Password</span>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={signupDetails.password}
                    onChange={(e) =>
                      setsignupDetails({
                        ...signupDetails,
                        password: e.target.value,
                      })
                    }
                  />
                </label>
              </div>

              <div className="col-lg-12">
                <div
                  className="signinButt"
                  style={{ background: "#2596be", color: "white" }}
                  onClick={handlesignup}
                >
                  Continue
                </div>
              </div>

              <br />
              <div className="col-lg-12">
                <div style={{ textAlign: "center", cursor: "pointer" }}>
                  <Link to="/login">
                    <h6 style={{ marginBottom: 30 }}>
                      Already have an account? Login
                    </h6>
                  </Link>

                  <Link to="/">
                    <h6 style={{ fontSize: 12, textDecoration: "underline" }}>
                      Back to Homepage
                    </h6>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Signup;
