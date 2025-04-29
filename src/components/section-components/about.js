import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="about-section pd-top-80">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 align-self-center">
                    <div className="section-title mb-lg-0">
                      <h2 className="title">A Traveler's <br /> Home</h2>
                      <p>West African Tours Ltd. is an all-inclusive, full-service Destination Management Company
based in The Gambia and serving the West African Region. West African Tours caters for the
needs of medium sized tour operators, international cruise companies, M.I.C.E and special
interest groups. We are also ideally suited to serve small tour companies with specialized
packages. Individual travelers can book direct to join our multi-country scheduled tours or
have a personalized tour created.
Our team is made up of over 30 trained field/driving and office-based staff that are dedicated
to ensuring the quality of travel management that you are looking for. Our field staff are
instantly recognizable in their batiks outfits and have a good knowledge of the country, its
history and culture for added value to any tour. We are equipped with reliable 4-wheel drive
vehicles, trucks as well as comfortable air-conditioned coaches and minibuses. With our wellestablished network of agents throughout the region, we can advise, organize and assist you
wherever you want to travel in West Africa.
West African Tours maintains close links with Regional Tourist Authorities and is a proud
member of a number of major International Travel Associations..</p>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-2">
                    <div className="thumb about-section-right-thumb">
                      {/* <img src={publicUrl+"assets/img/TravelAfrica.PNG"} alt="img" /> */}
                      <img src={publicUrl+"assets/img/cruiseShip.png"} alt="img" />
                      <img className="about-absolute-thumb" src={publicUrl+"assets/img/women.png"} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About