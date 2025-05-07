import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { BaseAPIURL, IMG_URL } from "../../API/base";
import Loader from "../global-components/loader";
import { useParams } from "react-router-dom";
import DestinationList from "./destination-list";
import { getDuration } from "../../utils/getDuration";
import Stars from "../global-components/Stars";
import toast, { Toaster } from "react-hot-toast";

const DestinatioDetails = () => {
  const { id } = useParams();
  const [destinationDetailsData, setDestinationDetailsData] = useState(null);
  const [capital, setCapital] = useState("Banjul");
  const [destinationPackages, setDestinationPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    reviewForId: "",
    message: "",
    name: "",
    email: "",
    rating: 0,
  });

  const getDestinationDetails = (id) => {
    fetch(`${BaseAPIURL}destination/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDestinationDetailsData(data.data);

        setIsLoading(false);
      });
  };

  const fetchToursByDestination = (id) => {
    fetch(`${BaseAPIURL}excursions/destination/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDestinationPackages(data.data.results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getDestinationDetails(id);
    fetchToursByDestination(id.toString());
    // Prefill form if user is logged in
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      setReviewForm((prev) => ({
        ...prev,
        name: userInfo.name,
        email: userInfo.email,
      }));
    }
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("wat_token");
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

      const response = await fetch(`${BaseAPIURL}review/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          ...reviewForm,
          reviewForId: id,
          rating: rating,
        }),
      });

      if (response.ok) {
        toast.success("Review created successfully!");
        setReviewForm({
          reviewForId: "",
          message: "",
          name: "",
          email: "",
          rating: 0,
        });
        setRating(0);
      } else {
        toast.error("Failed to create review");
      }
    } catch (error) {
      console.error("Error creating review:", error);
      toast.error("Failed to create review");
    }
  };

  return (
    <div>
      <div className="destinations-details-page mg-top--70">
        <div className="container">
          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  <div className="d-details-main-slider-item">
                    <img
                      src={
                        IMG_URL +
                          (destinationDetailsData?.coverImageUrl &&
                            destinationDetailsData?.coverImageUrl.replace(
                              "/home/images/",
                              ""
                            )) ?? ""
                      }
                      alt="west african tours"
                      style={{ width: "100%", height: 750 }}
                    />
                  </div>
                  <div className="d-details-main-slider-item">
                    <img
                      src={
                        IMG_URL +
                          (destinationDetailsData?.gallery &&
                            destinationDetailsData?.gallery[0].replace(
                              "/home/images/",
                              ""
                            )) ?? ""
                      }
                      alt="west african tours"
                      style={{ width: "100%", height: 750 }}
                    />
                  </div>
                  {/* <div className='d-details-main-slider-item'>
                    <img
                      src={IMG_URL + (destinationDetailsData?.gallery && destinationDetailsData?.gallery[1])?? ""}
                      alt='west african tours'
                      style={{ width: '100%', height: 750 }}
                    />
                  </div> */}
                </div>
                <div className="destinations-details-main-slider-controls">
                  <div className="slider-nav tp-control-nav" />
                  {/*slider-nav*/}
                  <div className="slider-extra tp-slider-extra">
                    <div className="text">
                      <span className="first">01 </span>
                      <span className="last">05</span>
                    </div>
                    {/*text*/}
                    <div
                      className="d-list-progress"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="slider__label sr-only" />
                    </div>
                  </div>
                  {/*slider-extra*/}
                </div>
              </div>
            </div>
          </div>
          {/* destinations-details-main-slider End */}
          <div className="row destinations-details-location-name">
            <div className="col-lg-12">
              <h3>{destinationDetailsData?.name}</h3>
              <p>{destinationDetailsData?.capital}</p>
            </div>
            <div className="col-lg-12">
              <p>{destinationDetailsData?.about}</p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          {/* <h4 className="single-page-small-title">Based On Traveller Visits and Local Insights</h4> */}

          {/* destinations-client-review-slider end */}
          {/* trip-plan start */}
          <div className="trip-plan-area">
            <h4 className="single-page-small-title">
              Tours from this destination
            </h4>
            <div
              className="row justify-content-center"
              style={{ height: "900px" }}
            >
              {destinationPackages
                ? destinationPackages?.map((item, i) => {
                    return (
                      <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                          <div className="thumb single-trip-plan-left">
                            <img
                              src={
                                IMG_URL +
                                  (item.coverImageUrl &&
                                    item?.coverImageUrl.replace(
                                      "/home/images/",
                                      ""
                                    )) ?? ""
                              }
                              alt="west african tours"
                              style={{ height: 150, width: 200 }}
                            />
                          </div>
                          <div className="single-trip-plan-right">
                            <ul className="tp-list-meta border-bt-dot">
                              <li>
                                <i className="fa fa-calendar-o" />{" "}
                                {/* {new Date(item?.startDate)
                              .toUTCString()
                              .substring(0, 16)} */}
                                {"On Request"}
                              </li>
                              <li>
                                <i className="fa fa-clock-o" />
                                {getDuration(item?.duration)}
                              </li>
                              <li>
                                <Stars rating={item?.rating} />
                              </li>
                            </ul>
                            <ul className="tp-list-meta border-bt-dot">
                              <Link
                                to={{
                                  pathname: `/tour-details/${item.id}`,
                                  state: item,
                                }}
                              >
                                {item?.name}
                              </Link>
                            </ul>
                            <div className="tp-price-meta tp-price-meta-cl">
                              <p>Price</p>
                              {item?.price > 0 ? (
                                <h2>
                                  {item.currency} {item.price}
                                </h2>
                              ) : (
                                <span className="text-danger">On Request</span>
                              )}
                              <del>
                                {/* {item?.price + 20} */}
                                <span>$</span>
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          {/* trip-plan End */}
          {/* location-details start */}
          <div className="location-details">
            <h4 className="single-page-small-title">Good To Know</h4>
            <div className="row">
              <div className="col-lg-7">
                <div className="location-details-table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="title">Country</td>
                        <td>{destinationDetailsData?.countryName}</td>
                      </tr>
                      <tr>
                        <td className="title">Visa Requirements</td>
                        <td>Visa Requirements</td>
                      </tr>
                      <tr>
                        <td className="title">Languages Spoken</td>
                        <td>{destinationDetailsData?.language}</td>
                      </tr>
                      <tr>
                        <td className="title">Currency Used</td>
                        <td>{destinationDetailsData?.currency}</td>
                      </tr>
                      {/* <tr>
                        <td className='title'>Area (km2)</td>
                        <td>30.37 million km²</td>
                      </tr> */}
                    </tbody>
                  </table>
                  <div className="btn-wrap text-center">
                    <a className="btn btn-yellow" href="#">
                      <span>
                        Pdf Download
                        <i className="ti-download" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="location-details-map">
                  <div
                    style={{
                      maxWidth: "100%",
                      listStyle: "none",
                      transition: "none",
                      overflow: "hidden",
                      width: "654px",
                      height: "400px",
                    }}
                  >
                    <div
                      id="display-googlemap"
                      style={{
                        height: "100%",
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    >
                      <iframe
                        style={{ height: "100%", width: "100%", border: 0 }}
                        frameBorder={0}
                        src={`https://www.google.com/maps/embed/v1/place?q=${capital}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
                      />
                    </div>
                    <a
                      className="googlehtml"
                      rel="nofollow"
                      href="https://www.embed-map.com"
                      id="get-mapdata"
                    >
                      https://www.embed-map.com
                    </a>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "#display-googlemap img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* location-details end */}
          {/* location-review-area start */}
          <div className="location-review-area mb-5">
            <div className="row">
              <div className="col-lg-8">
                <form
                  className="tp-form-wrap bg-gray tp-form-wrap-one"
                  onSubmit={handleReviewSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="single-page-small-title">
                        Write A Review
                      </h4>
                    </div>
                    <div className="col-md-6">
                      <div className="tp-review-meta text-lg-right">
                        <span className="ml-0">Your Rating</span>
                        <div className="star-rating">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className="star"
                              style={{
                                cursor: "pointer",
                                fontSize: "20px",
                                color:
                                  star <= (hoveredRating || rating)
                                    ? "#ffc107"
                                    : "#e4e5e9",
                                marginRight: "5px",
                              }}
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Name</span>
                        <input
                          type="text"
                          value={reviewForm.name}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              name: e.target.value,
                            })
                          }
                          required
                        />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Email</span>
                        <input
                          type="email"
                          value={reviewForm.email}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap">
                        <span className="single-input-title">Comments</span>
                        <textarea
                          value={reviewForm.message}
                          onChange={(e) =>
                            setReviewForm({
                              ...reviewForm,
                              message: e.target.value,
                            })
                          }
                          required
                        />
                      </label>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-yellow float-right"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-3 col-lg-4 offset-xl-1 mt-5 mt-lg-0 hidden-md">
                <a href="#">
                  <img
                    src={publicUrl + "assets/img/Explore-Gambia.jpg"}
                    alt="West African Tours"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* location-review-area end */}
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DestinationList />
        </>
      )}
    </div>
  );
};

export default DestinatioDetails;
