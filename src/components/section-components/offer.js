// import React, { Component } from 'react';
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import SliderItem from "../sliderItem/SliderItem";
import { GetAllOffer } from "../../API/OfferAPI";
import { toast } from "react-hot-toast";

const Offer = () => {
  const [packages, setPackages] = useState([]);

  const GetPackages = async () => {
    axios
      .get(GetAllOffer())
      .then((res) => {
        const allPackages = res?.data?.data?.results;
        // Get 3 random packages
        const randomPackages = allPackages
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setPackages(randomPackages);
        console.log("Random Tour packages", randomPackages);
      })
      .catch(function (error) {
        if (error.response) {
          toast.error("Offers failed to load");
        }
      });
  };
  useEffect(() => {
    GetPackages();
  }, []);

  return (
    <div className="offer-area pd-top-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2 className="title">Special Interest Tours</h2>
              <p>
                We take onboard that people have different interests when
                travelling, we at West African Tours can arrange memorable
                tours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="destinations-list-slider-bg">
        <div className="container">
          <div className="row">
            <SliderItem packages={packages} />
            <div className="col-lg-2 align-self-center order-lg-11">
              <div className="container">
                <div className="destinations-slider-controls">
                  <div className="slider-nav tp-control-nav" />
                  {/*slider-nav*/}
                  <div className="tp-slider-extra slider-extra">
                    <div className="text">
                      <span className="first">01 </span>
                      <span className="last" />
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
        </div>
      </div>
    </div>
  );
};

export default Offer;
