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

const TourListV2 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  const [tourPackages, setTourPackages] = useState([]);

  const { loading, setLoading } = useLoader();
  const [show, setShow] = useState(false);

  const { suggest, setSuggest } = useSuggest();

  const { cartData, setCartData } = useCart();
  const { cartCount, setCartCount } = useCartCounter();

  const handleCheckBoxOnchange = (evnt, data) => {
    data.isSelected = true;
    setCartData((prev) => [...prev, data]);
  };
  useEffect(() => {
    setCartCount(cartData?.length);
  }, [cartData]);

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
                  {show && tourPackages.length == 0 ? (
                    <h3 style={{ textAlign: "center" }}>
                      No tours to preview under selected destination and
                      excursion type
                    </h3>
                  ) : null}
                  {tourPackages.map((item) => {
                    return (
                      <div
                        className="single-destinations-list style-three"
                        key={item.id}
                      >
                        <div
                          className="thumb"
                          style={{
                            objectFit: "cover",

                            borderTopRightRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }}
                        >
                          <img
                            src={
                              IMG_URL +
                                (item?.coverImageUrl &&
                                  item?.coverImageUrl.replace(
                                    "/home/images",
                                    ""
                                  )) ?? ""
                            }
                            alt="list"
                          />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <Stars rating={5} />
                            {/* <i className='ic-yellow fa fa-star' />
                          <i className='ic-yellow fa fa-star' />
                          <i className='ic-yellow fa fa-star' />
                          <i className='ic-yellow fa fa-star' />
                          <i className='fa fa-star' /> */}
                            <span>{Number(5).toFixed(1)}</span>
                          </div>
                          <p className="location">
                            <img
                              src={publicUrl + "assets/img/icons/1.png"}
                              alt="map"
                            />
                            {item?.location}
                          </p>
                          <h4 className="title">
                            <Link
                              to={{
                                pathname: `/tour-details/${item.id}`,
                                state: item,
                              }}
                            >
                              {item?.name}
                            </Link>
                          </h4>
                          <p className="content">{item?.description}</p>
                          <div className="list-price-meta">
                            <ul className="tp-list-meta d-inline-block">
                              <li>
                                <i className="fa fa-clock-o" /> {getDuration(item)}
                              </li>
                              <li>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                {5}
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tp-price-meta"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              disabled={item.isSelected}
                              className={
                                item.isSelected
                                  ? "btn btn-success"
                                  : "btn btn-yellow"
                              }
                              onClick={(e) => handleCheckBoxOnchange(e, item)}
                            >
                              <i className="ti-shopping-cart" /> Add to Cart{" "}
                            </button>
                            {/* <Label>
                            <span className='single-input-title' style={{color:"#071C55"}}>Add to Cart</span>
                            </Label> {" "}
                            <input  type="checkbox" onChange={(e)=>handleCheckBoxOnchange(e,item)}/> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className='col-xl-3 col-lg-4 order-lg-1'>
              <div className='sidebar-area'>
                <div className='widget tour-list-widget'>
                  <div className='widget-tour-list-search'>
                    <form className='search-form'>
                      <div className='form-group'>
                        <input type='text' placeholder='Search' />
                      </div>
                      <button className='submit-btn' type='submit'>
                        <i className='ti-search' />
                      </button>
                    </form>
                  </div>
                  <div className='widget-tour-list-meta'>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-dot-circle-o' /> Destination?
                    </div>
                    <div className='single-widget-search-input'>
                      <input
                        type='text'
                        placeholder='Tour Destination'
                        value={searchFilter.destination}
                        onChange={(e) =>
                          setSearchFilter({
                            ...searchFilter,
                            destination: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-plus-circle' /> Travel Type
                    </div>
                    <div className='single-widget-search-input'>
                      <select
                        className='select w-100 custom-select'
                        value={searchFilter.type}
                        onChange={(e) =>
                          setSearchFilter({
                            ...searchFilter,
                            type: e.target.value,
                          })
                        }
                      >
                        <option value={1}>Tourism</option>
                        <option value={2}>Long Excursion</option>
                        <option value={3}>Short Excursion</option>
                        <option value={4}>Special Interest Tours</option>
                        <option value={5}>Eco Tourism</option>
                      </select>
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-calendar-minus-o' /> Departing
                    </div>
                    <div className='single-widget-search-input'>
                      <input
                        type='text'
                        className='departing-date custom-select'
                        placeholder='Departing'
                      />
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-calendar-minus-o' /> Returning
                    </div>
                    <div className='single-widget-search-input'>
                      <input
                        type='text'
                        className='returning-date custom-select'
                        placeholder='Returning'
                      />
                    </div>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-usd' /> Price Filter
                    </div>
                    <div className='widget-product-sorting'>
                      <input
                        type='range'
                        min='1'
                        max='1000'
                        className='slider-product-sorting'
                        value={searchFilter.price}
                        onChange={(e) =>
                          setSearchFilter({
                            ...searchFilter,
                            price: e.target.value,
                          })
                        }
                        style={{ width: '100%' }}
                      />

                      <div className='product-range-detail'>
                        <label htmlFor='amount'>Price: </label>
                        <input
                          type='text'
                          id='amount'
                          value={searchFilter.price}
                          onChange={(e) =>
                            setSearchFilter({
                              ...searchFilter,
                              price: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='widget_ads'>
                  <a href='#'>
                    <img
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

export default TourListV2;
