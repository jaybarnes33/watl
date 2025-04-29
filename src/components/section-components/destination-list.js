import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import { BaseAPIURL, IMG_URL } from "../../API/base";
import Loader from "../../components/global-components/loader";
import { destinationList } from "../../API/DestinationPackagesAPI";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAll = async () => {
    axios.get(destinationList()).then((res) => {
      setDestinations(res?.data?.data);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getAll();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <div className="destination-area viaje-go-top">
        <div className="container-bg mg-top--70">
          <div className="container">
            <div className="row justify-content-center align-items-stretch">
              {destinations?.map((x, i) => {
                return (
                  <div key={i} className="col-lg-4 col-md-6">
                    <div className="single-destination-grid text-center ">
                      <div className="thumb">
                        <img
                          src={
                            IMG_URL +
                              (x?.coverImageUrl &&
                                x?.coverImageUrl.replace(
                                  "/home/images/",
                                  ""
                                )) ?? ""
                          }
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          alt="West African Tours"
                        />
                      </div>
                      <div className="details d-flex flex-column">
                        <div className="tp-review-meta">
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <i className="ic-yellow fa fa-star" />
                          <span>{x?.rating}</span>
                        </div>
                        <h3 className="title">{x?.name}</h3>
                        <p
                          className="content"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            marginBottom: "1rem",
                          }}
                        >
                          {parse(x?.about)}
                        </p>
                        <div className="mt-auto">
                          <Link
                            className="btn btn-gray"
                            to={{ pathname: "/destination-details", state: x }}
                          >
                            <span>
                              Explore
                              <i className="la la-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-12">
                <div className="btn-wrapper text-center">
                  <Link
                    className="btn btn-yellow mt-4"
                    to="/destination-list-full"
                  >
                    <span>
                      Load More
                      <i className="la la-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DestinationList;
