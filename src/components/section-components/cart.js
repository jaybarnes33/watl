import React, { Component } from 'react'
import useCart from '../useCart'
import useCartCounter from '../useCartCounter'

import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../../components/global-components/loader'
import Stars from '../global-components/Stars'
import { BaseAPIURL, IMG_URL } from '../../API/base'
import useSuggest from '../useSuggest'
import useLoader from '../useLoader'
import { Row } from 'react-bootstrap'

const Cart = () => {
  const {cartData, setCartData}= useCart()
  const {cartCount, setCartCount}= useCartCounter()
  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'

  const [tourPackages, setTourPackages] = useState([])
  const [show, setShow]=useState(false)

  const {loading, setLoading}=useLoader()


	const{suggest,setSuggest} =useSuggest()



  useEffect(()=>{
    setCartCount(cartData?.length)
      },[cartData])


  const handleRemove=(item,id)=>{
      console.log(item);
      setCartData((current) =>
      current.filter((cart) => cart.id !== item.id))
  }


  // useEffect(() => {
  //   fetch(`${BaseAPIURL}package`, {
  //     method: 'GET', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Authorization: `Bearer ${userDetails.access_token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTourPackages(data.data)
  //       setLoading(false)
  //     })
  // }, [])
  useEffect(()=>{
    
    setLoading(false)

  },[setLoading])

  if (loading) {
    return <Loader />
  } else {
    return (
      
      <div className='tour-list-area pd-top-120 viaje-go-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 order-lg-12'>
              <div className='tour-list-area'>
              {cartData.length === 0? <h3  style={{textAlign:"center"}}>Your cart is empty</h3>: null}

                {cartData?.map((item) => {
                  return (
                    <div
                      className='single-destinations-list style-three'
                      key={item._id}
                    >
                      <div className='thumb'>
                        <img src={IMG_URL + item?.coverImageUrl.replace("/home/images/", "")} alt='list' />
                      </div>
                      <div className='details'>
                        <div className='tp-review-meta'>
                          <Stars rating={6} />
                          {/* <i className='ic-yellow fa fa-star' />
                          <i className='ic-yellow fa fa-star' />
                          <i className='ic-yellow fa fa-star' />
                          <i className='ic-yellow fa fa-star' />
                          <i className='fa fa-star' /> */}
                          <span>{Number(5).toFixed(1)}</span>
                        </div>
                        <p className='location'>
                          <img
                            src={publicUrl + 'assets/img/icons/1.png'}
                            alt='map'
                          />
                          {item?.location}
                        </p>
                        <h4 className='title'>
                          <Link
                            to={{
                              pathname: `/tour-details/${item.id}`,
                              state: item,
                            }}
                          >
                            {item?.name}
                          </Link>
                        </h4>
                        <p className='content'>{item?.description}</p>
                        <div className='list-price-meta'>
                          <ul className='tp-list-meta d-inline-block'>
                            <li>
                              <i className='fa fa-calendar-o' />{' '}
                             {"On Request"}
                            </li>
                            <li>
                              <i className='fa fa-clock-o' /> {item?.duration}{' '}
                             {item?.duration > 1 ? 'days' : 'day'}
                            </li>
                            <li>
                              <i className='fa fa-star' />
                              {Number(5).toFixed(1)}
                            </li>
                          </ul>
                          <div className='tp-price-meta d-inline-block'>
                            <p>Price</p>
                            <h2>
                              {item?.price} <span>{item.currency}</span>
                            </h2>
                          </div>
                          
                        </div>
                        <div className='tp-price-meta' style={{textAlign:'right'}}>
          <button className='btn btn-danger' onClick={()=>handleRemove(item)} style={{position:"right"}}>Remove from cart </button>
                            
                          </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            
            </div>
          </div>
          <Row
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "right",
            paddingRight: "20px",
            marginTop : "200px",
          }}
          >
          {/* <button className='btn btn-secondary' hidden={cartData.length == 0? true:false}>Cancel </button> */}

          {/* <button className='btn btn-primary' hidden={cartData.length == 0? true:false}>Book </button> */}

          </Row>
        </div>
      </div>
    )
  }
}

export default Cart

