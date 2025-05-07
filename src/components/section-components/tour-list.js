import React, { Component } from "react";
import ExcursionItem from "./ExcursionItem";

class TourList extends Component {
  render() {
    // Sample data - replace this with your actual data source
    const excursions = [
      {
        id: 1,
        image: "assets/img/destination-list/16.png",
        rating: 4.0,
        location: "Dubai",
        title: "Dubai City",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        date: "8oct",
        duration: "4 days",
        price: 620,
      },
      {
        id: 2,
        image: "assets/img/destination-list/11.png",
        rating: 4.0,
        location: "France",
        title: "Eiffel Tower",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        date: "8oct",
        duration: "4 days",
        price: 620,
      },
      {
        id: 3,
        image: "assets/img/destination-list/12.png",
        rating: 4.0,
        location: "Italy",
        title: "Colosseum, Rome",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        date: "8oct",
        duration: "4 days",
        price: 620,
      },
      {
        id: 4,
        image: "assets/img/destination-list/5.png",
        rating: 4.0,
        location: "Indonesia",
        title: "Bali Province",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        date: "8oct",
        duration: "4 days",
        price: 620,
      },
      {
        id: 5,
        image: "assets/img/destination-list/7.png",
        rating: 4.0,
        location: "Spain",
        title: "Barcelona city beach",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        date: "8oct",
        duration: "4 days",
        price: 620,
      },
      {
        id: 6,
        image: "assets/img/destination-list/9.png",
        rating: 4.0,
        location: "Maldives",
        title: "Hurawalhi Island",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
        date: "8oct",
        duration: "4 days",
        price: 620,
      },
    ];

    return (
      <div className="tour-list-area pd-top-120 viaje-go-top">
        <div className="container">
          <div className="row">
            {excursions.map((excursion) => (
              <ExcursionItem key={excursion.id} excursion={excursion} />
            ))}
            <div className="col-lg-12 text-md-center text-left">
              <div className="tp-pagination text-md-center text-left d-inline-block mt-4">
                <ul>
                  <li>
                    <a className="prev page-numbers" href="#">
                      <i className="la la-long-arrow-left" />
                    </a>
                  </li>
                  <li>
                    <span className="page-numbers">1</span>
                  </li>
                  <li>
                    <span className="page-numbers current">2</span>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      3
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      4
                    </a>
                  </li>
                  <li>
                    <a className="next page-numbers" href="#">
                      <i className="la la-long-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TourList;
