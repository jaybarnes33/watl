import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";
import { BaseAPIURL } from "../API/base";
import Loader from "./global-components/loader";
import AuthWrapper from "./AuthWrapper";

const Signup = () => {
  let history = useHistory();
  const [loading, setIsLoading] = useState(false);
  const [signupDetails, setsignupDetails] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setsignupDetails({
      ...signupDetails,
      password: newPassword,
    });

    if (!newPassword) {
      setPasswordError("");
      return;
    }

    if (!validatePassword(newPassword)) {
      setPasswordError("Password must meet all requirements");
    } else {
      setPasswordError("");
    }
  };

  const isFormValid = () => {
    return (
      signupDetails.email &&
      signupDetails.name &&
      signupDetails.password &&
      validatePassword(signupDetails.password)
    );
  };

  const fetchUserData = async (token) => {
    try {
      const response = await fetch(BaseAPIURL + "account", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.name) {
        sessionStorage.setItem("userInfo", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handlesignup = async () => {
    if (!isFormValid()) {
      toast.error("Please fill all fields correctly");
      return;
    }

    setIsLoading(true);
    let path = `/`;

    try {
      const response = await fetch(BaseAPIURL + "account/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupDetails),
      });

      const data = await response.json();

      if (data.accessToken) {
        sessionStorage.setItem("wat_token", data.accessToken);
        await fetchUserData(data.accessToken);
        history.push(path);
        toast.success("Account Created Successfully");
      } else {
        toast.error("Email already exists");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
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
                    placeholder="Enter email"
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
                  <span className="single-input-title">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={signupDetails.name}
                    onChange={(e) =>
                      setsignupDetails({
                        ...signupDetails,
                        name: e.target.value,
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
                    onChange={handlePasswordChange}
                  />
                </label>
                <div
                  style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}
                >
                  <p>Password must contain:</p>
                  <ul style={{ listStyle: "none", paddingLeft: "10px" }}>
                    <li
                      style={{
                        color: /[A-Z]/.test(signupDetails.password)
                          ? "green"
                          : "red",
                      }}
                    >
                      • At least one uppercase letter
                    </li>
                    <li
                      style={{
                        color: /[a-z]/.test(signupDetails.password)
                          ? "green"
                          : "red",
                      }}
                    >
                      • At least one lowercase letter
                    </li>
                    <li
                      style={{
                        color: /[0-9]/.test(signupDetails.password)
                          ? "green"
                          : "red",
                      }}
                    >
                      • At least one number
                    </li>
                    <li
                      style={{
                        color: /[@$!%*?&]/.test(signupDetails.password)
                          ? "green"
                          : "red",
                      }}
                    >
                      • At least one special character (@$!%*?&)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-12">
                <div
                  className="signinButt"
                  style={{
                    background: isFormValid() ? "#2596be" : "#cccccc",
                    color: "white",
                    cursor: isFormValid() ? "pointer" : "not-allowed",
                  }}
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
