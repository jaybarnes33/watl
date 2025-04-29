import React from "react";

const Loader = () => {
  return (
    <>
      {" "}
      <div className="preloader" id="preloader">
        <div className="preloader-inner">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>
      <div id="viaje"></div>
    </>
  );
};
export default Loader;
