import React from "react";
import Pageheader from "./global-components/page-header";
import Navbar from "./global-components/navbar";
import { Link } from "react-router-dom";
import Footer from "./global-components/footer";

const SpecialExursions = () => {
  const specialExcursions = [
    {
      id: 1,
      title: "Students",
    },
    {
      id: 2,
      title: "Fishing",
    },
    {
      id: 3,
      title: "Trekking",
    },

    {
      id: 4,
      title: "Culture, Music & Arts",
    },
    { id: 5, title: "Cruises" },
    {
      id: 6,
      title: "Nature Groups",
    },
    {
      id: 7,
      title: "Eco Tourism",
    },
    {
      id: 8,
      title: "Religious Groups",
    },
  ];

  return (
    <>
      <Navbar />
      <Pageheader headertitle="Special Excursions" />

      <div className="special-excursions-container">
        <div className="special-excursions-list">
          {specialExcursions.map((excursion) => (
            <Link
              className="special-excursion-item"
              to={`/special-excursions/${excursion.title}`}
            >
              <h2>{excursion.title}</h2>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpecialExursions;
