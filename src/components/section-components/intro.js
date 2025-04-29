import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import useLoader from '../useLoader';

const Intro=()=> {
	

    
        let publicUrl = process.env.PUBLIC_URL+'/'
		const{loading,setLoading}= useLoader()
		console.log(loading);


    return (
		<>
		 <div className="intro-area pd-top-112">
				  <div className="container">
				    <div className="row">
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
				          <h4 className="intro-title">
				            <span className="intro-count">01</span>
				            <Link className="intro-cat" to="/about">Destinations</Link>
				          </h4>
				          <p>With representatives' right across the region, we advise, organise and assist you where ever you wish to travel in West Africa.</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
				          <h4 className="intro-title">
				            <span className="intro-count">02</span>
				            <Link className="intro-cat" to="/about">Excursions</Link>
				          </h4>
				          <p>What to do when you arrive? Just lazy days? That's fine by us but you can also take advantage of our various excursions.</p>
				        </div>
				      </div>
				      <div className="col-md-4">
				        <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
				          <h4 className="intro-title">
				            <span className="intro-count">03</span>
				            <Link className="intro-cat" to="/about">Conferences</Link>
				          </h4>
				          <p>We have a team of dedicated professionals, so put your conferences and incentive programs in our capable hands.</p>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
				</>
	)
}

export default Intro