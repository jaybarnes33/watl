import React from "react";
import { useHistory } from "react-router-dom";
import "../../src/login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BaseAPIURL } from "../API/base";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./global-components/loader";
import AuthWrapper from "./AuthWrapper";

const Login = () => {
  let history = useHistory();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    let path = `/`;

    fetch(BaseAPIURL + "account/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("wat_token", data.token);
          history.push(path);
        } else {
          console.log(data);
          setTimeout(() => {
            toast.error(data.error);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsValid(false);
      })
      .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthWrapper>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="login-content">
          <h2 style={{ textAlign: "center" }}>Login</h2>
          {!isValid ? (
            <p
              style={{
                marginTop: 20,
                color: "red",
                padding: 5,
                textAlign: "center",
              }}
            >
              Invalid login credentials
            </p>
          ) : null}
          <div className="col-lg-12">
            <form action="#">
              <div className="col-lg-12">
                <label className="single-input-wrap">
                  <span className="single-input-title">Email</span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={loginDetails.email}
                    onChange={(e) =>
                      setLoginDetails({
                        ...loginDetails,
                        email: e.target.value,
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
                    value={loginDetails.password}
                    onChange={(e) =>
                      setLoginDetails({
                        ...loginDetails,
                        password: e.target.value,
                      })
                    }
                  />
                </label>
              </div>

              <br />

              <div className="col-lg-12">
                <div
                  className="signinButt"
                  style={{ background: "#2596be", color: "white" }}
                  onClick={handleLogin}
                >
                  Continue
                </div>
              </div>

              <br />
              <p style={{ textAlign: "center" }}>Or</p>

              <br />

              <div className="col-lg-12">
                <div style={{ textAlign: "center", cursor: "pointer" }}>
                  <Link to="/signup">
                    <h6 style={{ marginBottom: 30 }}>
                      New user? Create an account
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

export default Login;
