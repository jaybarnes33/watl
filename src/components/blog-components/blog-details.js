import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
class BlogDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
     	<div className="blog-details-area pd-top-120 viaje-go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12 col-md-12">
		        <div className="single-blog mb-0">
		          <div className="thumb">
		            <img  src={publicUrl+"assets/img/hotel-conference.png"} alt="blog" />
		          </div>
		          <div className="single-blog-details">
		            {/* <p className="date mb-0">19 September 2019</p>  */}
		             <h3 className="title">What we offer you.</h3>
		            <p className="content mb-0">West African Tours also provides Conference and Incentives service, Group and F.I.T arrangements, Hotel Reservations & Flight Reconfirmations and a wide variety of Excursions and Round trips.</p>
		          </div>
		        </div>
		        {/* details-blockquote-start */}
		            <h3 className="title">We can help with :</h3>

		        <blockquote className="blockquote tp-blockquote bg-dark-blue">
		          <ul className="mb-0" style={{color:'white', fontWeight:100}}>
					<li>Motivational and marketable programs to help your company reach its objectives</li>
					<li>Logistics centered on your company’s theme or topic</li>
					<li>Transfers and providing executive accommodation</li>
					<li>Full conference facilities, meals from light bites to lunches and grand dinners.</li>
					<li>Corporate gifts for clients and staff - Have your logo made into locally made gifts and memorabilia</li>
					<li>Wide range of tours with the option of exciting team activities with a touch of 5-star service</li>
				  </ul>
		        </blockquote>
		        {/* details-blockquote-end */}
				<h3 className="title">Incentive Programs</h3>
		        <p>Fine hotels with excellent cuisine, a full range of sports,
					 cultural and outdoor activities all set in a tropical paradise 
					 less than six hours flying time from Europe. Combine this with the service 
					 you would expect from a company that understands your requirements and have 
					 a first-class option for your incentive travel plans.</p>

					 <blockquote className="blockquote tp-blockquote bg-dark-blue">
				   <p>The International Conference Hall in The Gambia is a state-of-the-art facility consisting of:</p>
		          <ul className="mb-0" style={{color:'white', fontWeight:100}}>
					<li>4 Thematic meeting rooms (180 seats each)</li>
					<li>Plenary Hall with seating capacity of 1,031</li>
					<li>11 bilateral meeting rooms (32 seats each)</li>
					<li>10 office spaces</li>
					<li>4 press rooms (53 seats each)</li>
					<li>Wide range of tours with the option of exciting team activities with a touch of 5-star service</li>
				    <li>32 translations rooms</li>
				    <li>5 Lounges</li>
				    <li>A Banquet facility</li>
				    <li>Entertainment spaces with beautiful fauna and sea view</li>
				  
				  </ul>
		        </blockquote>

		        {/* details-gallery-start */}
		        <div className="gallery-area">
		          <div className="containerss">
		            <div className="gallery-filter-area row custom-gutter">
		              <div className="gallery-sizer col-1" />
		              {/* gallery-item */}
		              <div className="tp-gallery-item col-md-4 col-sm-6 mb-10">
		                <div className="tp-gallery-item-img">
		                  <img src={publicUrl+"assets/img/reception.png"} alt="image" />
		                </div>
		              </div>
		              {/* gallery-item */}
		              <div className="tp-gallery-item col-md-4 col-sm-6">
		                <div className="tp-gallery-item-img">
		                  <img src={publicUrl+"assets/img/conference-hall.png"} alt="image" />
		                </div>
		              </div>
					     {/* gallery-item */}
						 <div className="tp-gallery-item col-md-4 col-sm-6">
		                <div className="tp-gallery-item-img">
		                  <img src={publicUrl+"assets/img/guest-seated.png"} alt="image" />
		                </div>
		              </div>
		              {/* gallery-item */}
		              <div className="tp-gallery-item col-md-4 col-sm-6">
		                <div className="tp-gallery-item-img">
		                  <img src={publicUrl+"assets/img/sittingarea-1.png"} alt="image" />
		                </div>
		              </div>
					  
		           
		              {/* gallery-item */}
		              <div className="tp-gallery-item col-md-4 col-sm-6">
		                <div className="tp-gallery-item-img">
		                  <img src={publicUrl+"assets/img/mainlobby.png"} alt="image" />
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        {/* details-gallery-end */}
		        {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> */}
		        {/* details-video-start */}
		        <h4 className="single-page-small-title mt-5">Please  <Link className="ads-thumb" style={{color:"#F3941F"}} to="/contact">contact us</Link> to discuss your
				 specific needs and find out how we can help you.
				  We will be delighted to provide you with details 
				  of conference facilities or produce a bespoke 
				  incentive program.</h4>
		        <div className="video-popup-wrap style-two">
		          {/* <div className="thumb">
		            <img src={publicUrl+"assets/img/blog-details/7.png"} alt="video" />
		          </div> */}
		          {/* <div className="video-popup-btn">
		            <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
		          </div> */}
		        </div>
		        {/* details-video-end */}
		        {/* <p>Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
		        <p>Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> */}
		        <div className="row tag-share-area">
		          <div className="col-lg-6">
		            <span className="mr-2">Share:</span>
		            <ul className="social-icon style-two">
		              <li>
		                <a className="facebook" href="facebook.com"><i className="fa fa-facebook" /></a>
		              </li>
		              <li>
		                <a className="twitter" href="twitter.com"><i className="fa fa-twitter" /></a>
		              </li>
		              <li>
		                <a className="pinterest" href="instagram.com"><i className="fa fa-instagram" /></a>
		              </li>
		              <li>
		                <a className="linkedin" href="linkedin.com"><i className="fa fa-linkedin" /></a>
		              </li>
		            </ul>
		          </div>
		          {/* <div className="col-xl-5 col-lg-6 offset-xl-1">
		            <div className="single-blog-post-tags d-flex">
		              <span className="all-tags-title">Related Tags :</span>
		              <div className="all-tags">
		                <Link to="blog-v2">Europe</Link>
		                <Link to="blog-v2">Natural</Link>
		                <Link to="blog-v2">Travel</Link>
		                <Link to="blog-v2">Discover</Link>
		              </div>
		            </div>
		          </div> */}
		        </div>
		        {/* <nav className="navigation post-navigation single-post-navigation">
		          <div className="nav-links tp-control-nav">
		            <div className="row">
		              <div className="col-xl-5 col-lg-6 col-6 ">
		                <div className="nav-previous w-100">
		                  <a href="#">
		                    <span className="slick-arrow float-left"><i className="la la-long-arrow-left" /></span>
		                    <span className="nav-post-text pl-2 float-left">Prev</span>
		                    <h4 className="float-left">Why You Shouldn’t Ride Elephants In Thailand</h4>
		                  </a> 
		                </div>
		              </div>
		              <div className="col-xl-5 col-lg-6 col-6  offset-xl-2">
		                <div className="nav-next w-100">
		                  <a href="#">
		                    <span className="pr-2 nav-post-text">Next</span>
		                    <span className="slick-arrow float-right"><i className="la la-long-arrow-right" /></span>
		                    <h4 className="float-right">10 Best Highways for Romantic Long Drives</h4>
		                  </a> 
		                </div>
		              </div>
		            </div>
		          </div>
		        </nav> */}
		        {/* author-area-start */}
		        {/* <div className="author-area media">
		          <div className="media-left">
		            <img src={publicUrl+"assets/img/blog-details/8.png"} alt="img" />
		          </div> */}
		          {/* <div className="media-body">
		            <h4>Keanu Wood</h4>
		            <p>Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl, eget vehicula lorem sodales eget. Donec quis volutpat orci. Sed ipsum felis, tristique id egestas et, convallis ac velit. In consequat dolor libero, nec luctus orci rutrum nec. Phasellus vel arcu sed nibh ornare accumsan. Vestibulum in elementum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean laoreet rhoncus ipsum eget tempus. Praesent convallis fermentum sagittis.</p>
		            <ul className="social-icon style-three">
		              <li>
		                <a className="facebook" href="#"><i className="fa fa-facebook" /></a>
		              </li>
		              <li>
		                <a className="twitter" href="#"><i className="fa fa-twitter" /></a>
		              </li>
		              <li>
		                <a className="pinterest" href="#"><i className="fa fa-instagram" /></a>
		              </li>
		              <li>
		                <a className="linkedin" href="#"><i className="fa fa-linkedin" /></a>
		              </li>
		            </ul>
		          </div> */}
		        {/* </div> */}
		        {/* author-area-end */}
		        {/* comments-area-start */}
		        {/* <div className="comments-area">
		          <h4 className="comments-title">Comments</h4>
		          <ul className="comment-list">
		            <li>
		              <div className="single-comment-wrap">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/blog-details/9.png"} alt="img" />
		                </div>
		                <div className="content">
		                  <h4 className="title">Tyler Bailey</h4>
		                  <span className="date">17 SEP 2019</span>
		                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
		                  <a href="#" className="reply btn btn-yellow"><span><i className="fa fa-reply" />Reply</span></a>
		                </div>
		              </div>
		            </li>
		            <li>
		              <ul className="children">
		                <li>
		                  <div className="single-comment-wrap">
		                    <div className="thumb">
		                      <img src={publicUrl+"assets/img/blog-details/10.png"} alt="img" />
		                    </div>
		                    <div className="content">
		                      <h4 className="title">Laurie</h4>
		                      <span className="date">17 SEP 2019</span>
		                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
		                      <a href="#" className="reply btn btn-yellow"><span><i className="fa fa-reply" />Reply</span></a>
		                    </div>
		                  </div>
		                </li>
		              </ul>
		            </li>
		            <li>
		              <div className="single-comment-wrap">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/blog-details/11.png"} alt="img" />
		                </div>
		                <div className="content">
		                  <h4 className="title">Eliza Jordan</h4>
		                  <span className="date">17 SEP 2019</span>
		                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
		                  <a href="#" className="reply btn btn-yellow"><span><i className="fa fa-reply" />Reply</span></a>
		                </div>
		              </div>
		            </li>
		          </ul>
		        </div> */}
		        {/* comments-area-end */}
		        {/* blog-comment-area start */}
		        {/* <div className="blog-comment-area">
		          <form className="tp-form-wrap bg-gray tp-form-wrap-one">
		            <h4 className="single-page-small-title">Write A Coment.</h4>
		            <div className="row">
		              <div className="col-lg-6 col-md-6">
		                <label className="single-input-wrap">
		                  <span className="single-input-title">Name</span>
		                  <input type="text" />
		                </label>
		              </div>
		              <div className="col-lg-6 col-md-6">
		                <label className="single-input-wrap">
		                  <span className="single-input-title">Email</span>
		                  <input type="text" />
		                </label>
		              </div>
		              <div className="col-lg-12">
		                <label className="single-input-wrap">
		                  <span className="single-input-title">comments</span>
		                  <textarea defaultValue={""} />
		                </label>
		              </div>
		              <div className="col-12">
		                <a className="btn btn-yellow" href="#">Send Comment</a>
		              </div>
		            </div>
		          </form>
		        </div> */}
		        {/* blog-comment-area start */}
		      </div>
		      {/* <Sidebar /> */}
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogDetails;
