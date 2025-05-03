import React from "react";
import Pageheader from "./global-components/page-header";
import Navbar from "./global-components/navbar";
import { Link } from "react-router-dom";
import Footer from "./global-components/footer";


const SpecialExursions = () => {
  let publicUrl = process.env.PUBLIC_URL+'/'
  const specialExcursions = [
    {
      id: 1,
      title: "Students",
      imageUrl: publicUrl+"assets/img/excursion/students_excursion.jpg",

    },
    {
      id: 2,
      title: "Fishing",
      imageUrl: publicUrl+"assets/img/excursion/fishing.jpg",
    },
    {
      id: 3,
      title: "Trekking",
      imageUrl: publicUrl+"assets/img/excursion/africans_trekking.jpg",
    },

    {
      id: 4,
      title: "Culture, Music & Arts",
      imageUrl: publicUrl+"assets/img/excursion/culture_music_dance.jpg",
    },
    { id: 5, title: "Cruises",
      imageUrl: publicUrl+"assets/img/excursion/african_cruise.jpg",
     },
    {
      id: 6,
      title: "Nature Groups",
      imageUrl: publicUrl+"assets/img/excursion/africa_nature_groups.jpg",
    },
    {
      id: 7,
      title: "Eco Tourism",
      imageUrl: publicUrl+"assets/img/excursion/ecotourism-banner.jpg",
    },
    {
      id: 8,
      title: "Religious Groups",
      imageUrl: publicUrl+"assets/img/excursion/african_worship.jpg",
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
            key={excursion.id}
            to={`/special-excursions/${excursion.title}`}
          >
           <div className="special-excursion-item" >
            <img
              key={excursion.id}
              src={excursion.imageUrl}
              alt={excursion.title}
              className="special-excursion-image"
            />
          
              <h2>{excursion.title}</h2>
            
            
            </div>
          </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SpecialExursions;
