import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import UserProfile from "./section-components/user-profile";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import { useEffect } from "react";
import { BaseAPIURL } from "../API/base";
import { useState } from "react";

const UserProfilePage = () => {
  let token = sessionStorage.getItem("wat_token");
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setIsLoading] = useState(true);

  const getUserProfile = () => {
    fetch(BaseAPIURL + "account", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setUserInfo(data);
          setIsLoading(false);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          <Navbar />
          <PageHeader headertitle="User Profile" />
          <UserProfile userInfo={userInfo} />
          <Subscribe />
          <Footer />
        </div>
      ) : null}
    </>
  );
};

export default UserProfilePage;
