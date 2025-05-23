import React from "react";
import useCart from "../useCart";
import { useEffect, useState } from "react";
import Loader from "../../components/global-components/loader";
import useLoader from "../useLoader";
import { Row } from "react-bootstrap";
import ExcursionItem from "./ExcursionItem";
import { BaseAPIURL } from "../../API/base";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { cartData, removeFromCart } = useCart();
  const { loading, setLoading } = useLoader();
  const history = useHistory();

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleBooking = async () => {
    try {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (!userInfo) {
        toast.error("Please login to book excursions");
        history.push("/login");
        return;
      }

      const bookingPayload = {
        userId: userInfo.userId,
        totalPrice: 0,
        isCompleted: false,
        paymentStatus: "Pending",
        excursionIds: cartData.map((item) => item.id),
        isCancelled: false,
        userEmail: userInfo.email,
        userName: userInfo.name,
      };

      const response = await fetch(`${BaseAPIURL}booking/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("wat_token")}`,
        },
        body: JSON.stringify(bookingPayload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Booking successful!");
        // Clear cart after successful booking
        cartData.forEach((item) => removeFromCart(item));
        history.push("/user-profile");
      } else {
        toast.error(data.message || "Booking failed");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to process booking");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="tour-list-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 order-lg-12">
            <div className="tour-list-area">
              {cartData.length === 0 ? (
                <h3 style={{ textAlign: "center" }}>Your cart is empty</h3>
              ) : null}

              {cartData?.map((item) => {
                return (
                  <ExcursionItem
                    key={item.id}
                    excursion={item}
                    onSelect={handleRemove}
                    isCart={true}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
