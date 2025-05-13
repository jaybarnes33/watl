import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IMG_URL } from "../../API/base";
import Loader from "../global-components/loader";

import { getDuration } from "../../utils/getDuration";
import Stars from "../global-components/Stars";

const SpecialExcursion = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div>
      <div className="destinations-details-page mg-top--70">
        <div className="container">
          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  {data?.excursions?.[0]?.gallery?.map((image, index) => (
                    <div key={index} className="d-details-main-slider-item">
                      <img
                        src={
                          IMG_URL +
                          (image && image.replace("/home/images/", ""))
                        }
                        alt="west african tours"
                        style={{ width: "100%", height: 750 }}
                      />
                    </div>
                  ))}
                </div>
                <div className="destinations-details-main-slider-controls">
                  <div className="slider-nav tp-control-nav" />
                  <div className="slider-extra tp-slider-extra">
                    <div className="text">
                      <span className="first">01 </span>
                      <span className="last">
                        {data?.excursions?.[0]?.gallery?.length || 1}
                      </span>
                    </div>
                    <div
                      className="d-list-progress"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="slider__label sr-only" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* destinations-details-main-slider End */}
          <div className="row destinations-details-location-name">
            <div className="col-lg-12">
              <h3>{data?.countryName}</h3>
            </div>
            <div className="col-lg-12">
              <p>{data?.description}</p>
            </div>
          </div>
          {/* trip-plan start */}
          <div className="trip-plan-area">
            <h4 className="single-page-small-title">Available Excursions</h4>
            <div className="row justify-content-center">
              {data?.excursions?.map((excursion) => (
                <div key={excursion.id} className="col-lg-4 col-md-6">
                  <div className="single-trip-plan">
                    <div className="thumb single-trip-plan-left">
                      <img
                        src={
                          IMG_URL +
                          (excursion.coverImageUrl &&
                            excursion.coverImageUrl.replace(
                              "/home/images/",
                              ""
                            ))
                        }
                        alt="west african tours"
                        style={{ height: 150, width: 200 }}
                      />
                    </div>
                    <div className="single-trip-plan-right">
                      <ul className="tp-list-meta border-bt-dot">
                        <li>
                          <i className="fa fa-calendar-o" />
                          {new Date(
                            excursion.tourStartDate
                          ).toLocaleDateString()}
                        </li>
                        <li>
                          <i className="fa fa-clock-o" />
                          {getDuration(excursion.duration)}
                        </li>
                        <li>
                          <Stars rating={excursion.rating || 0} />
                        </li>
                      </ul>
                      <ul className="tp-list-meta border-bt-dot">
                        <Link
                          to={{
                            pathname: `/tour-details/${excursion.id}`,
                            state: excursion,
                          }}
                        >
                          {excursion.name}
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
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
                        <td>{data?.countryName}</td>
                      </tr>
                      <tr>
                        <td className="title">Location</td>
                        <td>{data?.excursions?.[0]?.location}</td>
                      </tr>
                      <tr>
                        <td className="title">Duration</td>
                        <td>{data?.excursions?.[0]?.duration} days</td>
                      </tr>
                      <tr>
                        <td className="title">Maximum Group Size</td>
                        <td>{data?.excursions?.[0]?.max} people</td>
                      </tr>
                    </tbody>
                  </table>
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
                        src={`https://www.google.com/maps/embed/v1/place?q=${data?.excursions?.[0]?.location}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
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
        </div>
      </div>
      {isLoading ? <Loader /> : null}
    </div>
  );
};

export default SpecialExcursion;
