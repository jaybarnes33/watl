import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../components/global-components/loader";
import Stars from "../global-components/Stars";
import { BaseAPIURL, IMG_URL } from "../../API/base";
import useSuggest from "../useSuggest";
import useLoader from "../useLoader";
import useCart from "../useCart";
import { toast } from "react-hot-toast";
import useCartCounter from "../useCartCounter";
import { getDuration } from "../../utils/getDuration";
import ExcursionItem from "./ExcursionItem";

const TourListV2 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  const [tourPackages, setTourPackages] = useState([]);

  const { loading, setLoading } = useLoader();
  const [show, setShow] = useState(false);

  const { suggest } = useSuggest();

  const { addToCart, existsInCart, removeFromCart } = useCart();

  const handleCheckBoxOnchange = (data) => {
    if (existsInCart(data)) {
      removeFromCart(data);
    } else {
      addToCart(data);
    }
  };
  useEffect(() => {
    console.log(suggest.categoryId);
    if (
      suggest?.destinationId &&
      suggest?.categoryId &&
      suggest?.categoryId !== "All"
    ) {
      console.log(suggest);
      setLoading(true);

      fetch(
        `${BaseAPIURL}excursions/destination/${suggest.destinationId}/type/${suggest.categoryId}?SortColumn=name&name&pageSize=20`,
        {
          method: "GET", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userDetails.access_token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.data.length > 0) {
            setTourPackages(data.data.results);
          } else if (data.data.length <= 0) {
            // setLoading(false)
            setShow(true);
            toast.error("No data to display");
          }
          //setSuggest(null)
          setTourPackages(data.data.results);
        })
        .catch(function (error) {
          if (error.response) {
            toast.error("Search failed Contact Admin");
          }
        });
    } else if (suggest.destinationId && suggest?.categoryId === "All") {
      console.log(suggest);
      setLoading(true);

      fetch(
        `${BaseAPIURL}excursions/destination/${suggest.destinationId}?SortColumn=name&name&pageSize=20`,
        {
          method: "GET", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userDetails.access_token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.data.length > 0) {
            setTourPackages(data.data.results);
          } else if (data.data.length <= 0) {
            // setLoading(false)
            setShow(true);
            toast.error("No data to display");
          }
          //setSuggest(null)
          setTourPackages(data.data.results);
        })
        .catch(function (error) {
          if (error.response) {
            toast.error("Search failed Contact Admin");
          }
        });
    }
  }, [suggest]);

  useEffect(() => {
    fetch(
      `${BaseAPIURL}excursions/allexcursion?SortColumn=name&name&pageSize=20`,
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${userDetails.access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("all tours", data);
        let mappedData = data.data.results.map((tour) => {
          return {
            ...tour,
            isSelected: false,
          };
        });
        setTourPackages(mappedData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <div className="tour-list-area pd-top-120 viaje-go-top">
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="row">
              <div className="col-xl-12 col-lg-12 order-lg-12">
                <div className="tour-list-area">
                  {show && tourPackages.length === 0 ? (
                    <h3 style={{ textAlign: "center" }}>
                      No tours to preview under selected destination and
                      excursion type
                    </h3>
                  ) : null}
                  {tourPackages.map((item) => {
                    return (
                      <ExcursionItem
                        key={item._id}
                        excursion={item}
                        onSelect={handleCheckBoxOnchange}
                        isCart={existsInCart(item)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TourListV2;
