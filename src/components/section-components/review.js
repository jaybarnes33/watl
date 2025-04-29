import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Review extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-review-area client-review-area-home pd-top-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="thumb wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
			          <div className="client-review-thumb">
			            <img src={publicUrl+"assets/img/maskk.JPG"}alt="review" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="single-client-review wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
			          <p className="sub-title">Travel Reviews</p>
			          <h3 className="location-name">The Gambia</h3>
			          <div className="tp-review-meta">
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
			            <i className="ic-yellow fa fa-star" />
						<i className="ic-yellow fa fa-star" />
			            <span>5.0</span>
			          </div>
			          <p>The Gambia has a magic that brings people back year after year and it is still one of the safest destinations in the world! The Gambia's relaxed laid back pace of life is ideal for those who prefer a quieter holiday, yet the Gambia also offers a wealth of history and culture which can be explored by boat or by road.</p>
			          <div className="media">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/gambia.png"} alt="client" />
			            </div>
			            <div className="media-body">
			              <h6>Jasmine Woodkin</h6>
			              <p>Tourist</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Review