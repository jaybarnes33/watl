import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loader from "../global-components/loader";
import { BaseAPIURL, IMG_URL } from "../../API/base";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import HolidayFun from "./holiday-plan";

const TourDetails = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  const [tourPackage, setTourPackage] = useState(null);
  const [submitData, setSubmitData] = useState({});
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviewPost, setREviewPost] = useState({
    message: "",
    name: "",
  });
  const [PostData, setPostData] = useState({});
  const [errorCode, setErrorCode] = useState(true);
  const [rating, setRating] = useState(5);

  const location = useLocation();
  const starsRef = useRef();

  const init = {
    name: "",
    email: "",
    phone: "",
    departureDate: "",
    returningDate: "",
    message: "",
  };
  const fetchTourDetails = (id) => {
    fetch(`${BaseAPIURL}excursions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTourPackage(data.data);
        setLoading(false);
      });
  };

  const fetchTourReviews = (id) => {
    fetch(`${BaseAPIURL}review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data === null) {
          return;
        }
        setReviews(data.data);
        setLoading(false);
      });
  };

  const handleOnChange = (event) => {
    // console.log(event?.target?.value);
    console.log({ name: event?.target?.name, value: event?.target?.value });
    // setSubmitData((data) => {
    //   return { ...data, [event?.target?.name]: event?.target?.value };
    // });
  };

  let codeError = true;

  const handleOnSubmit = () => {
    if (submitData?.name === "" || !submitData?.name) {
      toast.error("Name can not be empty");

      return;
    }
    if (submitData?.email === "" || !submitData?.email) {
      toast.error("Please provide email");

      return;
    }
    if (submitData?.phone === "" || !submitData?.phone) {
      toast.error("Please provide phone number");

      return;
    }
    if (submitData?.departureDate === "" || !submitData?.departureDate) {
      toast.error("Start date must be provided");

      return;
    }
    if (submitData?.returningDate === "" || !submitData?.returningDate) {
      toast.error("End date must be provided");
      setLoading(false);
      return;
    }
    setLoading(true);

    console.log(submitData);
    let id;
    if (location.state) {
      id = location.state._id;
    } else {
      id = localStorage.getItem("id");
    }

    let postBody = {
      package: id,
      contactDetails: {
        name: submitData?.name,
        email: submitData?.email,
      },

      message: submitData?.message,
    };
    console.log(postBody);

    axios
      .post(`${BaseAPIURL}book`, postBody)
      .then(function (response) {
        console.log(response?.data?.success);
        setSubmitData(init);
        if (response?.data?.success === true) {
          toast.success("Submitted Successfully");
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error?.response.data.success);
        let code = error?.response.data.success;
        setLoading(false);
        if (!code) {
          toast.error("Something went wrong: Please try again in some minutes");
        }
        // setErrorCode(code)
        toast.error("Something went wrong: Please try again in some minutes");
      });
  };
  useEffect(() => {
    if (!errorCode) {
      setLoading(false);
    }
    setErrorCode(true);
  }, [errorCode]);

  const handlePostReview = () => {
    let id;
    if (location.state) {
      id = location.state.id;
    } else {
      id = localStorage.getItem("id");
    }
    let postBody = {
      ...reviewPost,
      rating,
      reviewFor: id,
    };

    axios
      .post(`${BaseAPIURL}review/`, postBody)
      .then(function (response) {
        if (response?.data?.success === true) {
          window.location.reload();
        } else {
          toast.warning("Something went wrong with your post");
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Failed to submit");
      });
  };

  useEffect(() => {
    let id;
    if (location.state) {
      localStorage.setItem("id", location.state.id);
      id = location.state.id;
    } else {
      id = localStorage.getItem("id");
    }

    fetchTourDetails(id);
    // fetchTourReviews(id)
  }, []);

  console.log(tourPackage);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="tour-details-area mg-top--70">
          <div className="tour-details-gallery">
            <div className="container-bg bg-dark-blue">
              <div className="container">
                <div className="gallery-filter-area row">
                  <div className="gallery-sizer col-1" />
                  {/* gallery-item */}
                  {/* <div className='tp-gallery-item col-md-5 col-sm-6 mb-10'>
                  <div className='tp-gallery-item-img'>
                    <div className='thumbnails'>
                      <img
                        src={IMG_URL + (tourPackage.coverImageUrl &&  tourPackage?.coverImageUrl.replace("/home/images/", "")) ??""}
                        alt='image'
                      /> */}
                  {/* <div className='video-popup-btn'>
                        <a
                          href='#'
                          className='video-play-btn mfp-iframe'
                          tabIndex={0}
                        >
                          <i className='fa fa-play' />
                        </a>
                      </div> */}
                  {/* </div>
                  </div>
                </div> */}
                  {/* gallery-item */}
                  {tourPackage?.gallery
                    ? tourPackage?.gallery.map((url, i) => {
                        return (
                          <div
                            key={i}
                            className="tp-gallery-item col-md-3 col-sm-6"
                          >
                            <div className="tp-gallery-item-img">
                              <a href="#" data-effect="mfp-zoom-in">
                                <img
                                  src={
                                    `${IMG_URL}` +
                                      (url &&
                                        url
                                          .replace("/home/images/", "")
                                          .replace("/home/images/", "")) ?? ""
                                  }
                                  alt="west african tours"
                                />
                              </a>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-4">
                    <div className="details">
                      <p className="location mb-0">
                        <i className="fa fa-map-marker" />
                        {tourPackage?.location}
                      </p>
                      <h4 className="title"> {tourPackage?.name}</h4>
                      <p className="content">
                        {" "}
                        {tourPackage?.duration}{" "}
                        {tourPackage?.duration > 1 ? "Days" : "Day"}{" "}
                        {tourPackage?.numberOfPeople} People
                      </p>
                      <div className="tp-review-meta">
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <i className="ic-yellow fa fa-star" />
                        <span>5.0</span>
                      </div>
                      {/* <div className='all-tags'>
                      {tourPackage?.tags.map((tag, i) => {
                        return (
                          <a key={i} href='#'>
                            {tag}
                          </a>
                        )
                      })}
                    </div> */}
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-8">
                    <div className="book-list-warp">
                      <p className="book-list-content">
                        Just booked! Get your spot before it's too late.
                      </p>
                      <div className="tp-price-meta">
                        <p>Price</p>
                        <h2>
                          {tourPackage?.price}{" "}
                          <small>{tourPackage?.currency}</small>
                        </h2>
                      </div>
                    </div>
                    <ul className="tp-list-meta border-tp-solid">
                      <li className="ml-0">
                        <i className="fa fa-calendar-o" />{" "}
                        {/* {new Date(tourPackage?.startDate)
                        .toUTCString()
                        .substring(0, 16)} */}
                        On Request
                      </li>
                      <li>
                        <i className="fa fa-clock-o" /> {tourPackage?.duration}{" "}
                        {tourPackage?.duration > 1 ? "Days" : "Day"}
                      </li>
                      <li>
                        <i className="fa fa-users" />{" "}
                        {tourPackage?.numberOfPeople} People
                      </li>

                      <li>
                        <i className="fa fa-star" />{" "}
                        <i className="fa fa-star" />{" "}
                        <i className="fa fa-star" />{" "}
                        <i className="fa fa-star" />{" "}
                        <i className="fa fa-star" /> {5}{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-11">
                <div className="tour-details-wrap">
                  <h4 className="single-page-small-title">Description</h4>
                  <p>{tourPackage?.description}</p>
                  <p> </p>
                  <div className="package-included-area">
                    <h4 className="single-page-small-title">Included</h4>
                    <div className="row">
                      {/* {tourPackage?.addOns} */}
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-package-included">
                          <img
                            src={publicUrl + "assets/img/icons/15.png"}
                            alt="icons"
                          />
                          <h6>Food</h6>
                          <p>{tourPackage.food}</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-package-included">
                          <img
                            src={publicUrl + "assets/img/icons/16.png"}
                            alt="icons"
                          />
                          <h6>Accommodations</h6>
                          <p>Not Available</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-package-included">
                          <img
                            src={publicUrl + "assets/img/icons/17.png"}
                            alt="icons"
                          />
                          <h6>Transportation</h6>
                          <p>...</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-package-included">
                          <img
                            src={publicUrl + "assets/img/icons/18.png"}
                            alt="icons"
                          />
                          <h6>Drinks</h6>
                          <p>{tourPackage.drinks}</p>
                        </div>
                      </div>
                      {/* <div className='col-xl-4 col-sm-6'>
                      <div className='single-package-included'>
                        <img
                          src={publicUrl + 'assets/img/icons/19.png'}
                          alt='icons'
                        />
                        <h6>Tickets</h6>
                        <p>Entrance fee</p>
                      </div>
                    </div> */}
                      {/* <div className='col-xl-4 col-sm-6'>
                      <div className='single-package-included'>
                        <img
                          src={publicUrl + 'assets/img/icons/20.png'}
                          alt='icons'
                        />
                        <h6>Equipment</h6>
                        <p>Outdoor gear, safety</p>
                      </div>
                    </div> */}
                    </div>
                  </div>
                  {/* <div className='package-included-location'>
                  <h4 className='single-page-small-title'>Your Itinerary</h4>
                  <div className='row'>
                    <div className='col-lg-4 col-md-4'>
                      <div className='single-blog'>
                        <div className='p-list'>
                          <div className='list'>1</div>
                          <p>Day 1</p>
                        </div>
                        <div className='thumb'>
                          <img
                            src={publicUrl + 'assets/img/blog/8.png'}
                            alt='blog'
                          />
                        </div>
                        <div className='single-blog-details'>
                          <h4 className='title'>Welcome to St. John's</h4>
                          <p className='content'>
                            After a welcome drink, we'll stroll into town and
                            get to know each other over a hyper-local
                            “nose-to-tail” dinner. Show more
                          </p>
                          <a className='btn-read-more' href='#'>
                            <span>
                              Show More
                              <i className='la la-arrow-right' />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                      <div className='single-blog'>
                        <div className='p-list'>
                          <div className='list'>2</div>
                          <p>Day 2</p>
                        </div>
                        <div className='thumb'>
                          <img
                            src={publicUrl + 'assets/img/blog/1.png'}
                            alt='blog'
                          />
                        </div>
                        <div className='single-blog-details'>
                          <h4 className='title'>
                            Relaxation &amp; Exploration
                          </h4>
                          <p className='content'>
                            After a welcome drink, we'll stroll into town and
                            get to know each other over a hyper-local
                            “nose-to-tail” dinner. Show more
                          </p>
                          <a className='btn-read-more' href='#'>
                            <span>
                              Show More
                              <i className='la la-arrow-right' />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                      <div className='single-blog single-blog-after-none'>
                        <div className='p-list'>
                          <div className='list'>3</div>
                          <p>Day 3</p>
                        </div>
                        <div className='thumb'>
                          <img
                            src={publicUrl + 'assets/img/blog/9.png'}
                            alt='blog'
                          />
                        </div>
                        <div className='single-blog-details'>
                          <h4 className='title'>Farewell &amp; Departure</h4>
                          <p className='content'>
                            After a welcome drink, we'll stroll into town and
                            get to know each other over a hyper-local
                            “nose-to-tail” dinner. Show more
                          </p>
                          <a className='btn-read-more' href='#'>
                            <span>
                              Show More
                              <i className='la la-arrow-right' />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='host-area'>
                  <div className='single-host-wrap text-center'>
                    <div className='thumb'>
                      <img
                        src={publicUrl + 'assets/img/client/02.png'}
                        alt='img'
                      />
                    </div>
                    <h4>Mike At Atlas Obscura Trips</h4>
                    <p>
                      I'm your Atlas Obscura Trip Coordinator. Since 2016, Atlas
                      Obscura has been offering unusual trips to the world’s
                      most extraordinary places. Our itineraries are developed
                      in close collaboration with the locals and insiders who
                      host them—our global community of explorers
                    </p>
                    <p>
                      {' '}
                      Felicity Roberts will be leading your trip. A rural
                      Newfoundlander, certified herbalist, farmer, writer, wild
                      food advocate, and self relic, Felicity is most on the
                      barrens cutting heather to dye wool or hanging off the
                      edge
                    </p>
                    <a className='btn btn-yellow' href='#'>
                      Contact Host
                    </a>
                  </div>
                </div> */}

                  <div className="service-location-map">
                    <h4 className="single-page-small-title">
                      Service Location
                    </h4>
                    <div className="service-location-map">
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?q=${tourPackage?.location}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                      />
                    </div>
                  </div>

                  <div className="comments-area tour-details-review-area">
                    <h4 className="comments-title">Reviews</h4>
                    <ul className="comment-list mb-0">
                      {reviews
                        ? reviews?.map((review) => {
                            return (
                              <li key={review?._id}>
                                <div className="single-comment-wrap">
                                  <div className="thumb">
                                    <img
                                      src="assets/img/client/2.png"
                                      alt="img"
                                    />
                                  </div>
                                  <div className="content">
                                    <h4 className="title">{review?.name}</h4>
                                    <span className="date">
                                      {new Date(review?.createAt).toUTCString()}
                                    </span>
                                    <div className="tp-review-meta">
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                      <i className="ic-yellow fa fa-star" />
                                    </div>
                                    <p>{review?.message}</p>
                                  </div>
                                </div>
                              </li>
                            );
                          })
                        : ""}
                    </ul>
                    <div className="btn-wrapper text-right mt-3">
                      <a className="btn-read-more" href="#">
                        <span>
                          More Review
                          <i className="la la-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="location-review-area">
                    <form className="tp-form-wrap bg-gray tp-form-wrap-one ">
                      <div className="row">
                        <div className="col-lg-6">
                          <h4 className="single-page-small-title">
                            Write A Review
                          </h4>
                        </div>
                        <div className="col-lg-6">
                          <div className="tp-review-meta text-lg-right">
                            <span className="mr-3 ml-0">Assign Rating</span>
                            <div className="rating">
                              <label>
                                <input
                                  type="radio"
                                  name="stars"
                                  value="1"
                                  onClick={(e) => setRating(e.target.value)}
                                />
                                <span className="icon">★</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="stars"
                                  value="2"
                                  onClick={(e) => setRating(e.target.value)}
                                />
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="stars"
                                  value="3"
                                  onClick={(e) => setRating(e.target.value)}
                                />
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="stars"
                                  value="4"
                                  onClick={(e) => setRating(e.target.value)}
                                />
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="stars"
                                  value="5"
                                  onClick={(e) => setRating(e.target.value)}
                                />
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                                <span className="icon">★</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <label className="single-input-wrap">
                            <span className="single-input-title">Name</span>
                            <input
                              type="text"
                              value={reviewPost.name}
                              onChange={(e) =>
                                setREviewPost({
                                  ...reviewPost,
                                  name: e.target.value,
                                })
                              }
                            />
                          </label>
                        </div>
                        {/* <div className='col-lg-6'>
                        <label className='single-input-wrap'>
                          <span
                            className='single-input-title'
                            value={reviewPost.email}
                          >
                            Email
                          </span>
                          <input type='text' />
                        </label>
                      </div> */}
                        <div className="col-lg-12">
                          <label className="single-input-wrap">
                            <span className="single-input-title">Comments</span>
                            <textarea
                              value={reviewPost.message}
                              onChange={(e) =>
                                setREviewPost({
                                  ...reviewPost,
                                  message: e.target.value,
                                })
                              }
                            />
                          </label>
                        </div>
                        <div className="col-12" onClick={handlePostReview}>
                          <a className="btn btn-yellow">Send</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className='col-lg-4'>
              <div className='sidebar-area sidebar-area-4'>
                <div className='widget tour-list-widget'>
                  <div className='widget-tour-list-meta'>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-user' /> Name
                    </div>
                    <div className='single-widget-search-input'>
                      <input type='text' placeholder='name' name="name" value={submitData?.name || ""}  onChange={(e)=>setSubmitData({
                        ...submitData,name: e?.target?.value
                      })}/>
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-envelope' /> Email
                    </div>
                    <div className='single-widget-search-input'>
                      <input type='text' placeholder='Email' name="email"  value={submitData?.email || ""}  onChange={(e)=>setSubmitData({
                        ...submitData,email: e?.target?.value
                      })}/>
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-phone' /> Phone
                    </div>
                    <div className='single-widget-search-input'>
                      <input type='text' placeholder='Phone' name="phone" value={submitData?.phone || ""}   onChange={(e)=>setSubmitData({
                        ...submitData, phone: e?.target?.value
                      })}/>
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-calendar-minus-o' /> Start Date
                    </div>
                    <div className='single-widget-search-input'>
                      <input
                        type='date'
                        className='departing-date custom-select'
                        placeholder='Departing'
                        value={submitData?.departureDate || ""}
                        onChange={(e)=>setSubmitData({
                          ...submitData,departureDate: e?.target?.value
                        })}
                        name="departureDate"
                      />
                    </div> 
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-calendar-minus-o' /> End Date
                    </div>
                    <div className='single-widget-search-input'>
                      <input
                        type='date'
                        className='returning-date custom-select'
                        placeholder='Returning'
                        name="returningDate"
                        value={submitData?.returningDate || ""}
                        onChange={(e)=>setSubmitData({
                          ...submitData,returningDate: e?.target?.value
                        })}
                   
                      />
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-keyboard-o' /> Message
                    </div>
                    <div className='single-widget-search-input'>
                      <textarea placeholder='Type' 
                      name="message"
                        value={submitData?.message || ""}
                        
                        onChange={(e)=>setSubmitData({
                          ...submitData,message: e?.target?.value
                        })}
                      
                      />
                    </div>
                    <div className='text-lg-center text-left'>
                      <button className='btn btn-yellow' onClick={handleOnSubmit} >
                        Book Now <i className='fa fa-paper-plane' />
                        
                      </button>
                      
                    </div>
                  </div>
                </div>
                <div className='widget_ads'>
                  <a href='#'>
                    <img
                      className='w-100'
                      src={publicUrl + 'assets/img/others/01.png'}
                      alt='img'
                    />
                  </a>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TourDetails;
