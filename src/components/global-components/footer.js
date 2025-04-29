import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

class Footer_v1 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const minscript = document.createElement('script')
    minscript.async = true
    minscript.src = publicUrl + 'assets/js/main.js'

    document.body.appendChild(minscript)
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = 'Footer logo'

    return (
      <footer
        className='footer-area'
        style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/2.png)' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='footer-widget widget'>
                <div className='about_us_widget'>
                  <Link to='/' className='footer-logo'>
                    <img
                      src={publicUrl + 'assets/img/WEST_AFRICAN_T.png'}
                      alt='footer logo'
                    />{' '}
                    <h4 className='widget-title'>West African Tours Ltd</h4>
                  </Link>
                  <p>
                    We believe brand interaction is key in communication. Real
                    innovations and a positive customer experience are the heart
                    of successful communication.
                  </p>
                  <ul className='social-icon'>
                    <li>
                      <a className='facebook' href='#' target='_blank'>
                        <i className='fa fa-facebook  ' />
                      </a>
                    </li>
                    <li>
                      <a className='twitter' href='#' target='_blank'>
                        <i className='fa fa-twitter  ' />
                      </a>
                    </li>
                    <li>
                      <a className='pinterest' href='#' target='_blank'>
                        <i className='fa fa-instagram' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='footer-widget widget '>
                <div className='widget-contact'>
                  <h4 className='widget-title'>Contact us</h4>
                  <p>
                    <i className='fa fa-map-marker' />
                    <span>P.M.B. 222 Serrekunda, The Gambia West Africa</span>
                  </p>
                  <p className='location'>
                    <i className='fa fa-envelope-o' />
                    <span>
                      <a href='Watours@outlook.com'>Watours@outlook.com</a>
                    </span>
                  </p>
                  <p className='telephone'>
                    <i className='fa fa-phone base-color' />
                    <span>
                      <a href='tel: +2204495532'>
                        <span>(+220) 449 5532</span>{' '}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='footer-widget widget'>
                <h4 className='widget-title'>Quick Link</h4>
                <ul className='widget_nav_menu  viaje-go-top'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/destination-list'>Destinations</Link>
                  </li>
                  <li>
                    <Link to='/tours-list'>Tours</Link>
                  </li>
                  {/* <li>
                    <Link to='/blog'>Blog</Link>
                  </li> */}
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className='col-lg-3 col-md-6'>
              <div className='footer-widget widget'>
                <h4 className='widget-title'>Instagram Gallery</h4>
                <ul className='widget-instagram-feed'>
                  <li>
                    <a href='#'>
                      <img
                        src={publicUrl + 'assets/img/instagram/1.png'}
                        alt='img'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img
                        src={publicUrl + 'assets/img/instagram/2.png'}
                        alt='img'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img
                        src={publicUrl + 'assets/img/instagram/3.png'}
                        alt='img'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img
                        src={publicUrl + 'assets/img/instagram/4.png'}
                        alt='img'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img
                        src={publicUrl + 'assets/img/instagram/5.png'}
                        alt='img'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img
                        src={publicUrl + 'assets/img/instagram/6.png'}
                        alt='img'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className='copyright-inner'>
          <div className='copyright-text'>
            © West African Tours {new Date().getFullYear()} All rights reserved.
            Developed by{' '}
            <a href='https://akwaabaevolution.com/' target='_blank'>
              <i className='fa fa-heart' />
              <span>Akwaaba Evolution.</span>
            </a>
          </div>
        </div> */}
      </footer>
    )
  }
}

export default Footer_v1
