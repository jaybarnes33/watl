import React, { Component } from 'react';
import parse from 'html-react-parser';

class IntroV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area pd-top-108">
			  <div className="container">
			    <div className="section-title text-lg-center text-left">
			      <h2 className="title"><span>Travel </span> With Love</h2>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/9.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">Private Transport</h4>
			          <p>Enjoy our private, quick and secured road transport service to our sites in less time</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/10.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">Diverse Destinations</h4>
			          <p>The services we provide go beyond The Gambia and across to Senegal, Burkina Faso, Ghana, Togo, Benin and Mali, So where ever you choose to arrive we can meet you and show you the true diversities of West Africa in quality comfort and style</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/11.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">Great Hotels</h4>
			          <p>We offer a wide range of services such as full hotel reservation and admin back up, meet to greet services, inclusive tour packages roundtrips/ multi country tours, conference and incentives packages, worldwide ticketing and cruise handling amongst other services.</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/12.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">Fast Booking</h4>
			          <p>Experience the fastest booking on our platform and response minutes after booking. A slot is immediately assigned, right after payment is made. Visit our tour package page to start booking </p>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default IntroV3