import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import parse from "html-react-parser";
import { BaseAPIURL } from "../../API/base";

const UserProfile = ({ userInfo }) => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("profile");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("wat_token");
      const response = await fetch(
        `${BaseAPIURL}booking/user-booking?name=${userInfo.name}&pageIndex=${currentPage}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data.data) {
        setBookings(data.data.results);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "bookings") {
      fetchBookings();
    }
  }, [activeTab, currentPage]);

  const handleLogout = () => {
    sessionStorage.removeItem("wat_token");
    sessionStorage.removeItem("userInfo");
    history.push("/");
  };

  const renderProfileTab = () => (
    <div className="profile-form">
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={userInfo.name}
              readOnly
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={userInfo.email}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <button
            className="btn btn-danger"
            onClick={handleLogout}
            style={{ marginTop: "20px" }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  const renderBookingsTab = () => (
    <div className="bookings-list">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : bookings.length > 0 ? (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Excursions</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.generatedBookingId}</td>
                  <td>{booking.excursionNames.join(", ")}</td>
                  <td>${booking.totalPrice}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.isCompleted
                          ? "bg-success"
                          : booking.isCancelled
                          ? "bg-danger"
                          : "bg-warning"
                      }`}
                    >
                      {booking.isCompleted
                        ? "Completed"
                        : booking.isCancelled
                        ? "Cancelled"
                        : "Pending"}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        booking.paymentStatus === "Paid"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">No bookings found</div>
      )}
    </div>
  );

  return (
    <div className="user-profile-area pd-top-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-12">
            <div className="row">
              <div className="col-xl-7 col-lg-12 offset-xl-1">
                <div className="tabs-container">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "profile" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("profile")}
                      >
                        Profile
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "bookings" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("bookings")}
                      >
                        My Bookings
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content mt-4">
                    {activeTab === "profile"
                      ? renderProfileTab()
                      : renderBookingsTab()}
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

export default UserProfile;
