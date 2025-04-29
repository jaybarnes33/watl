import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { BaseAPIURL, IMG_URL } from "../../API/base";

const DestinationListV2 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllDestinations = (id) => {
    fetch(`${BaseAPIURL}destination`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllDestinations();
  }, []);

  return (
    <div>
      {" "}
      <div className="destination-list-area pd-top-120 viaje-go-top">
        <div className="container">
          {/* destination-list gallery start */}
          <div className="gallery-area destination-list-gallery-area">
            <div className="container">
              <div className="gallery-filter-area row">
                <div className="gallery-sizer col-1" />
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-8 col-md-6 col-12 mb-10">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        // src={IMG_URL + destinations[0]?.coverImage}
                        src={publicUrl + "assets/img/banner/banner-4.jpg"}
                        alt="West African Tours"
                        style={{ width: "100%", height: 592 }}
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[0]?.location}</h3>
                      <p>{destinations[0]?.about}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[0],
                        }}
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/rgambia.jpg"}
                        alt="West African Tours"
                        style={{ width: "100%", height: 592 }}
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[1]?.location}</h3>
                      <p>{destinations[1]?.about}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[1],
                        }}
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/senegal (1).jpg"}
                        alt="West African Tours"
                        style={{ width: "100%", height: 592 }}
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[2]?.location}</h3>
                      <p>{destinations[2]?.about}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[2],
                        }}
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        src={
                          publicUrl + "assets/img/Palais-de-Congres-Cotonou.jpg"
                        }
                        alt="image"
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[3]?.location}</h3>
                      <p>{destinations[3]?.about.substr(0, 255)}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[3],
                        }}
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/cruiseShip.png"}
                        alt="image"
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[4]?.location}</h3>
                      <p>{destinations[4]?.about}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[4],
                        }}
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/wat1.png"}
                        alt="image"
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[5]?.location}</h3>
                      <p>{destinations[5]?.about}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[5],
                        }}
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/wat2.png"}
                        alt="image"
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[6]?.location}</h3>
                      <p>{destinations[6]?.about}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[6],
                        }}
                      >
                        <span>
                          Explore
                          <i className="la la-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* gallery-item */}
                <div className="tp-gallery-item col-lg-4 col-md-6 col-12">
                  <div className="tp-gallery-item-img">
                    <div className="thumb">
                      <img
                        src={publicUrl + "assets/img/wat3.png"}
                        alt="image"
                      />
                    </div>
                    <div className="details">
                      <h3>{destinations[7]?.location}</h3>
                      <p>{destinations[7]?.about}</p>
                      <Link
                        className="btn-read-more"
                        to={{
                          pathname: "/destination-details",
                          state: destinations[7],
                        }}
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
            </div>
          </div>
          {/* Gallery area end */}
        </div>
      </div>
    </div>
  );
};

export default DestinationListV2;
