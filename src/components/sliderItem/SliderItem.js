import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../API/base";
import { getDuration } from "../../utils/getDuration";

const SliderItem = ({ packages }) => {
  console.log("slider item ", packages);
  console.log("slider item length", packages.length);
  return (
    <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
      <div className="row">
        {packages.map((tourPackage, index) => (
          <div key={tourPackage.id} className="col-lg-4 col-md-6 mb-4">
            <div className="single-destinations-list relative text-center h-100">
              <div className="thumb">
                <span className="d-list-tag">Special Offer</span>
                <img
                  src={
                    IMG_URL +
                    tourPackage?.coverImageUrl.replace("/home/images/", "")
                  }
                  alt="list"
                  className="img-fluid"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="d-list-btn-wrap">
                  <div className="d-list-btn viaje-go-top">
                    <Link
                      className="btn btn-yellow"
                      to={{
                        pathname: `/tour-details/${tourPackage?.id}`,
                        state: tourPackage,
                      }}
                    >
                      Book Now <i className="fa fa-paper-plane" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="details p-3">
                <h4 className="title">{tourPackage?.name}</h4>
                <p className="content">
                  {tourPackage?.description.substr(0, 100)}
                  {"..."}
                </p>
                <ul
                  className="tp-list-meta border-bt-dot"
                  style={{
                    position: "absolute",
                    bottom: 20,
                    width: "100%",
                    left: 0,
                    right: 0,
                  }}
                >
                  <li>
                    <i className="fa fa-clock-o" />
                    {getDuration(tourPackage.duration)}
                  </li>
                  <li>
                    <i className="fa fa-star" /> {5}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderItem;
