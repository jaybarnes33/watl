import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../API/base";
import Stars from "../global-components/Stars";
import { getDuration } from "../../utils/getDuration";

const ExcursionItem = ({ excursion, onSelect, isCart = false }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="single-destinations-list style-three" key={excursion.id}>
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
              (excursion?.coverImageUrl &&
                excursion?.coverImageUrl.replace("/home/images", "")) ?? ""
          }
          alt="list"
        />
      </div>
      <div className="details">
        <div className="tp-review-meta">
          <Stars rating={excursion?.rating} />
        </div>
        <p className="location">
          <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
          {excursion?.location}
        </p>
        <h4 className="title">
          <Link
            to={{
              pathname: `/tour-details/${excursion.id}`,
              state: excursion,
            }}
          >
            {excursion?.name}
          </Link>
        </h4>
        <p className="content">{excursion?.description}</p>
        <div className="list-price-meta">
          <ul className="tp-list-meta d-inline-block">
            <li>
              <i className="fa fa-clock-o" /> {getDuration(excursion.duration)}
            </li>
          </ul>
        </div>
        <div className="tp-price-meta" style={{ textAlign: "right" }}>
          <button
            disabled={excursion.isSelected}
            className={
              !isCart
                ? excursion.isSelected
                  ? "btn btn-success"
                  : "btn btn-yellow"
                : "btn btn-danger"
            }
            onClick={() => onSelect(excursion)}
          >
            {isCart || excursion.isSelected
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
          {/* <Label>
        <span className='single-input-title' style={{color:"#071C55"}}>Add to Cart</span>
        </Label> {" "}
        <input  type="checkbox" onChange={(e)=>handleCheckBoxOnchange(e,excursion)}/> */}
        </div>
      </div>
    </div>
  );
};

export default ExcursionItem;
