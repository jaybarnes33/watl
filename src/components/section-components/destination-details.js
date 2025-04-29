import React, { Component, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import parse from 'html-react-parser'
import axios from 'axios'
import { BaseAPIURL, IMG_URL } from '../../API/base'
import loader from '../global-components/loader'
import Loader from '../global-components/loader'
import {
  destinatioDetailsId,
  destinationPackagesId,
} from '../../API/DestinationPackagesAPI'

const DestinatioDetails = () => {
  const [destinationDetailsData, setDestinationDetailsData] = useState(null)
  const [capital, setCapital] = useState('Banjul')
  const [destinationPackages, setDestinationPackages] = useState([])
  const [destinations, setDestinations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  const { state } = location
  

  const getDestinationDetails = (id) => {
  
    fetch(`${BaseAPIURL}destination/${id}`)
      .then((res) => res.json())
      .then((data) => {
      
        // if(data.data.name == "Senegal"){
        //   setCapital("Dakar")
        // }
        // if(data.data.name == "Ghana"){
        //   setCapital("Accra")
        // }
        // if(data.data.name == "Gambia"){
        //   setCapital("Banjul")
        // }
        // if(data.data.name.includes("Ivory")){
        //   setCapital("Yamoussoukro")
        // }
        // if(data.data.name == "Nigeria"){
        //   setCapital("Abuja")
        // }
        // if(data.data.name == "Togo"){
        //   setCapital("Lome")
        // }
        
        // if(data.data.name == "Guniea Bissau"){
        //   setCapital("Bissau")
        // }
        // if(data.data.name == "Guniea"){
        //   setCapital("Conakry")
        // }
        // if(data.data.name.includes("Leone")){
        //   setCapital("Freetown")
        // }
        setDestinationDetailsData(data.data)
       
        setIsLoading(false)
      })
  }

  const fetchToursByDestination = (id) => {
    fetch(`${BaseAPIURL}excursions/destination/${id}`)
      .then((res) => res.json())
      .then((data) => {
       
        setDestinationPackages(data.data.results)
        setIsLoading(false)
      })
  }

  const getAllDestinations = (id) => {
    fetch(`${BaseAPIURL}destination`)
      .then((res) => res.json())
      .then((data) => {
         setDestinations(data.data)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    let id
    if (state) {
    
      localStorage.setItem('destid', location.state.id)
      id = location.state.id
    } else {
      id = localStorage.getItem('destid')
    }
    getDestinationDetails(id)
    fetchToursByDestination(id.toString())
    getAllDestinations()
  }, [])

  let publicUrl = process.env.PUBLIC_URL + '/'

  return (
    <div>
      <div className='destinations-details-page mg-top--70'>
        <div className='container'>
          {/* destinations-details-main-slider start */}
          <div className='row justify-content-center'>
            <div className='col-xl-10'>
              <div className='destinations-details-main-slider-wrap'>
                <div className='destinations-details-main-slider'>
                  <div className='d-details-main-slider-item'>
                    <img
                      src={IMG_URL + (destinationDetailsData?.coverImageUrl && destinationDetailsData?.coverImageUrl.replace("/home/images/",""))?? ""}
                      alt='west african tours'
                      style={{ width: '100%', height: 750 }}
                    />
                  </div>
                  <div className='d-details-main-slider-item'>
                    <img
                      src={IMG_URL + (destinationDetailsData?.gallery && destinationDetailsData?.gallery[0].replace("/home/images/",""))?? "" }
                      alt='west african tours'
                      style={{ width: '100%', height: 750 }}
                    />
                  </div>
                  {/* <div className='d-details-main-slider-item'>
                    <img
                      src={IMG_URL + (destinationDetailsData?.gallery && destinationDetailsData?.gallery[1])?? ""}
                      alt='west african tours'
                      style={{ width: '100%', height: 750 }}
                    />
                  </div> */}
                </div>
                <div className='destinations-details-main-slider-controls'>
                  <div className='slider-nav tp-control-nav' />
                  {/*slider-nav*/}
                  <div className='slider-extra tp-slider-extra'>
                    <div className='text'>
                      <span className='first'>01 </span>
                      <span className='last'>05</span>
                    </div>
                    {/*text*/}
                    <div
                      className='d-list-progress'
                      role='progressbar'
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className='slider__label sr-only' />
                    </div>
                  </div>
                  {/*slider-extra*/}
                </div>
              </div>
            </div>
          </div>
          {/* destinations-details-main-slider End */}
          <div className='row destinations-details-location-name'>
            <div className='col-lg-12'>
              <h3>{destinationDetailsData?.name}</h3>
              <p>{destinationDetailsData?.capital}</p>
            </div>
            <div className='col-lg-12'>
              <p>{destinationDetailsData?.about}</p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          {/* <h4 className="single-page-small-title">Based On Traveller Visits and Local Insights</h4> */}

          {/* destinations-client-review-slider end */}
          {/* trip-plan start */}
          <div className='trip-plan-area'>
            <h4 className='single-page-small-title'>
              Tours from this destination
            </h4>
            <div className='row justify-content-center' style={{height:'900px'}}>
              {destinationPackages? destinationPackages?.map((item, i) => {
                return (
                  <div key={item.id} className='col-lg-4 col-md-6'>
                    <div className='single-trip-plan'>
                      <div className='thumb single-trip-plan-left'>
                        <img
                          src={IMG_URL + (item.coverImageUrl &&  item?.coverImageUrl.replace("/home/images/", "")) ??""}
                          alt='west african tours'
                          style={{ height: 150, width:200 }}
                        />
                      </div>
                      <div className='single-trip-plan-right'>
                        <ul className='tp-list-meta border-bt-dot'>
                          <li>
                            <i className='fa fa-calendar-o' />{' '}
                            {/* {new Date(item?.startDate)
                              .toUTCString()
                              .substring(0, 16)} */}{"On Request"}
                          </li>
                          <li>
                            <i className='fa fa-clock-o' /> {item?.duration}{' '}
                            {item?.duration > 1 ? 'days' : 'day'}
                          </li>
                          <li>
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />{' '}
                            {/* {Number(item?.rating).toFixed(1)} */}
                            {5}
                          </li>
                        </ul>
                        <ul className='tp-list-meta border-bt-dot'>
                          <Link
                            to={{
                              pathname: `/tour-details/${item.id}`,
                              state: item,
                            }}
                          >
                            {item?.name}
                          </Link>
                        </ul>
                        <div className='tp-price-meta tp-price-meta-cl'>
                          <p>Price</p>
                          <h2>
                            {item?.price} <small>{item.currency}</small>
                          </h2>
                          <del>
                            {/* {item?.price + 20} */}
                            <span>$</span>
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }):""}
            </div>
          </div>
          {/* trip-plan End */}
          {/* location-details start */}
          <div className='location-details'>
            <h4 className='single-page-small-title'>Good To Know</h4>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='location-details-table'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td className='title'>Country</td>
                        <td>{destinationDetailsData?.countryName}</td>
                      </tr>
                      <tr>
                        <td className='title'>Visa Requirements</td>
                        <td>Visa Requirements</td>
                      </tr>
                      <tr>
                        <td className='title'>Languages Spoken</td>
                        <td>{destinationDetailsData?.language}</td>
                      </tr>
                      <tr>
                        <td className='title'>Currency Used</td>
                        <td>{destinationDetailsData?.currency}</td>
                      </tr>
                      {/* <tr>
                        <td className='title'>Area (km2)</td>
                        <td>30.37 million km²</td>
                      </tr> */}
                    </tbody>
                  </table>
                  <div className='btn-wrap text-center'>
                    <a className='btn btn-yellow' href='#'>
                      <span>
                        Pdf Download
                        <i className='ti-download' />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='location-details-map'>
                  <div
                    style={{
                      maxWidth: '100%',
                      listStyle: 'none',
                      transition: 'none',
                      overflow: 'hidden',
                      width: '654px',
                      height: '400px',
                    }}
                  >
                    <div
                      id='display-googlemap'
                      style={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '100%',
                      }}
                    >
                      <iframe
                        style={{ height: '100%', width: '100%', border: 0 }}
                        frameBorder={0}
                        src={`https://www.google.com/maps/embed/v1/place?q=${capital}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                      />
                    </div>
                    <a
                      className='googlehtml'
                      rel='nofollow'
                      href='https://www.embed-map.com'
                      id='get-mapdata'
                    >
                      https://www.embed-map.com
                    </a>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '#display-googlemap img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* location-details end */}
          {/* location-review-area start */}
          <div className='location-review-area'>
            <div className='row'>
              <div className='col-lg-8'>
                <form className='tp-form-wrap bg-gray tp-form-wrap-one'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h4 className='single-page-small-title'>
                        Write A Review
                      </h4>
                    </div>
                    <div className='col-md-6'>
                      <div className='tp-review-meta text-lg-right'>
                        <span className='ml-0'>Assigned Rating</span>
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                        <i className='fa fa-star' />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <label className='single-input-wrap'>
                        <span className='single-input-title'>Name</span>
                        <input type='text' />
                      </label>
                    </div>
                    <div className='col-md-6'>
                      <label className='single-input-wrap'>
                        <span className='single-input-title'>Email</span>
                        <input type='text' />
                      </label>
                    </div>
                    <div className='col-lg-12'>
                      <label className='single-input-wrap'>
                        <span className='single-input-title'>comments</span>
                        <textarea defaultValue={''} />
                      </label>
                    </div>
                    <div className='col-12'>
                      <a className='btn btn-blue' href='#'>
                        + Add Photo
                      </a>
                      <a className='btn btn-yellow float-right' href='#'>
                        Send
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className='col-xl-3 col-lg-4 offset-xl-1 mt-5 mt-lg-0 hidden-md'>
                <a href='#'>
                  <img
                    src={publicUrl + 'assets/img/Explore-Gambia.jpg'}
                    alt='West African Tours'
                  />
                </a>
              </div>
            </div>
          </div>
          {/* location-review-area start */}
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='destination-area pd-top-120'>
            <div className='container'>
              <div className='row justify-content-center'>
                { destinations?.map((destination) => {
                  return (
                    <div key={destination.id} className='col-lg-4 col-md-6'>
                      <div className='single-destination-grid text-center'>
                        <div className='thumb'>
                          <img
                            src={IMG_URL + destination?.coverImage??""}
                            alt='West African Tours'
                          />
                        </div>
                        <div className='details'>
                          <div className='tp-review-meta'>
                            {/* <i className='ic-yellow fa fa-star' />
                            <i className='ic-yellow fa fa-star' />
                            <i className='ic-yellow fa fa-star' />
                            <i className='ic-yellow fa fa-star' />
                            <i className='fa fa-star' /> */}
                            {/* <span>{Number(destination?.rating).toFixed(1)} </span> */}
                          </div>
                          <h3 className='title'>{destination?.name}</h3>
                          <p className='content'>
                            {destination?.about.substring(0, 255)}
                            {'...'}
                          </p>
                          <Link
                            className='btn btn-gray'
                            to={{
                              pathname: '/destination-details',
                              state: destination,
                            }}
                          >
                            <span>
                              Explore
                              <i className='la la-arrow-right' />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DestinatioDetails
