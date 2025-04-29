import React, { Component, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { BaseAPIURL } from '../../API/base'

const init = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}
const Contact = () => {
  const [submitData, setSubmitData] = useState(init)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneNumberRef = useRef(null)
  const messageRef = useRef(null)

  let imagealt = 'image'
  let publicUrl = process.env.PUBLIC_URL + '/'

  const refs = [nameRef, emailRef, phoneNumberRef, messageRef]
  const handleSubmit = (event) => {
    console.log(submitData)

    handlePost(submitData)
    setSubmitData('')
  }

  const handlePost = (data) => {
    axios
      .post(`${BaseAPIURL}inquiry`, data)
      .then(function (response) {
        console.log(response?.data?.success)
        setSubmitData(init)
        if (response?.data?.success === true) {
          toast.success('Submitted Successfully')
        }
      })
      .catch(function (error) {
        console.log(error)
        toast.error('Failed to submit')
      })
  }

  const checkForValue = (ref) => {
    console.log({ checkForValue: ref })
    setSubmitData((pre) => ({
      ...pre,
      [ref.current?.name]: ref.current?.value,
    }))
    if (ref.current?.value) {
      ref.current.style.border = '1px solid green'
    }
  }
  const handleOnChange = (evnt) => {
    console.log(evnt?.target?.name, evnt?.target?.value)
  }

  return (
    <div>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='contact-area pd-top-108'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-lg-center text-left'>
                <h2 className='title'>Get In Touch!</h2>
                <p>
                  To book an excursion for more than 8 people, to get a quote or
                  simply to make an enquiry, please contact us
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-5 offset-xl-1 col-lg-6'>
              <div className='thumb'>
                <img src={publicUrl + 'assets/img/others/11.png'} alt='img' />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6'>
              <form className='tp-form-wrap'>
                <div className='row'>
                  <div className='col-md-6'>
                    <label className='single-input-wrap style-two'>
                      <span className='single-input-title' style={{color:"#071C55"}}>Name</span>
                      <input
                        ref={nameRef}
                        type='text'
                        name='name'
                        placeholder='Enter Full Name'
                        value={submitData?.name || ''}
                        onChange={(e) => {
                          handleOnChange(e)
                          checkForValue(nameRef)
                        }}
                      />
                    </label>
                  </div>
                  <div className='col-md-6'>
                    <label className='single-input-wrap style-two'>
                      <span className='single-input-title' style={{color:"#071C55"}}>Number</span>
                      <input
                        ref={phoneNumberRef}
                        type='text'
                        name='phoneNumber'
                        placeholder='Enter Phone Number'
                        value={submitData?.phoneNumber || ''}
                        onChange={(e) => {
                          handleOnChange(e)
                          checkForValue(phoneNumberRef)
                        }}
                      />
                    </label>
                  </div>
                  <div className='col-lg-12'>
                    <label className='single-input-wrap style-two'>
                      <span className='single-input-title' style={{color:"#071C55"}}>Email</span>
                      <input
                        ref={emailRef}
                        type='text'
                        name='email'
                        placeholder='Enter Email'
                        value={submitData?.email || ''}
                        onChange={(e) => {
                          handleOnChange(e)
                          checkForValue(emailRef)
                        }}
                      />
                    </label>
                  </div>
                  <div className='col-lg-12'>
                    <label className='single-input-wrap style-two'>
                      <span className='single-input-title' style={{color:"#071C55"}}>Message</span>
                      <textarea
                        ref={messageRef}
                        name='message'
                        value={submitData?.message || ''}
                        onChange={(e) => {
                          handleOnChange(e)
                          checkForValue(messageRef)
                        }}
                      />
                    </label>
                  </div>
                  <div className='col-12'>
                    <button
                      type='button'
                      className='btn btn-yellow'
                      onClick={handleSubmit}
                    >
                      Send Message
                    </button>
                    {/* <input
                        type='submit'
                       
                        
                      /> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-info-area pd-top-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-8 order-lg-12'>
              <iframe
                className='contact-map'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15520.390911885255!2d-16.689005!3d13.468073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29a45edd34b15%3A0x7a50ed2c4d9fd37e!2sFajara%2C%20Serrekunda%2C%20The%20Gambia!5e0!3m2!1sen!2sgh!4v1670230093487!5m2!1sen!2sgh'
              />
            </div>
            <div className='col-xl-3 col-lg-4 order-lg-1'>
              <div className='contact-info bg-gray'>
                <p>
                  <i className='fa fa-map-marker' />
                  <span>Serrekunda, The Gambia</span>
                </p>
                {/* <p>
                          <i className="fa fa-clock-o" /> 
                          <span>Office Hour 9:00 to 7:00 Sunday 10:00 to 5:00</span>
                        </p> */}
                <p>
                  <i className='fa fa-envelope' />
                  <span>
                    Email: <a href='Watours@outlook.com'>Watours@outlook.com</a>
                  </span>
                </p>
                <p>
                  <i className='fa fa-phone' />
                  <span>
                    telephone:{' '}
                    <a href='tel: +2204495258'>
                      <span>(+220) 449 5258</span> <br />
                    </a>
                    telephone:{' '}
                    <a href='tel: +2204495532'>
                      <span>(+220) 449 5532</span>{' '}
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    Proud Members of:{' '}
                    <span>
                      <img
                        src={publicUrl + 'assets/img/body-logos-w640h480.png'}
                        alt='logo '
                      />{' '}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
