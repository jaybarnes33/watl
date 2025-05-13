import React from "react";
import Pageheader from "./global-components/page-header";
import Navbar from "./global-components/navbar";
import Footer from "./global-components/footer";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import SpecialExcursion from "./section-components/special-excursion";

const SpecialExcursionDetails = () => {
  const data = decodeURIComponent(useLocation().pathname.split("/")[2]);

  const parsedData = JSON.parse(data);

  return (
    <>
      <Navbar />
      <Pageheader
        headertitle={`Special Excursion - ${parsedData.countryName}`}
      />
      <SpecialExcursion data={parsedData} />
      <Footer />
    </>
  );
};

export default SpecialExcursionDetails;
