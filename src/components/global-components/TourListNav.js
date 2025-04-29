import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import useCartCounter from '../useCartCounter'

const TourListNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {cartCount, setCartCount}=useCartCounter()
  const [show,setShow]= useState(false)

  useLayoutEffect(() => {
    let token = sessionStorage.getItem('wat_token')
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  let publicUrl = process.env.PUBLIC_URL + '/'
  let imgattr = 'logo'
  let anchor = '#'
  return (
    <nav className='navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top'>
      <div className='container nav-container'>
        <div className='responsive-mobile-menu'>
          <div className='mobile-logo'>
            <Link to='/'>
              <img
                src={publicUrl + 'assets/img/WEST_AFRICAN_T.png'}
                alt={imgattr}
              />
            </Link>
          </div>
          <button
            className='navbar-toggler float-right'
            type='button'
            data-toggle='collapse'
            data-target='#tp_main_menu'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggle-icon'>
              <span className='line' />
              <span className='line' />
              <span className='line' />
            </span>
          </button>
          <div className='nav-right-content'>
            <ul className='pl-0'>
              <li className='top-bar-btn-booking'>
                <Link className='btn btn-yellow' to='/tour-details'>
                  Book Now <i className='fa fa-paper-plane' />
                </Link>
              </li>
              {/* <li className='tp-lang'>
                <div className='tp-lang-wrap'>
                  <select className='select single-select'>
                    <option value={1}>ENG</option>
                  </select>
                </div>
              </li> */}
              {/* <li className='search'>
                <i className='ti-search' />
              </li> */}
              <li className='notification'>
                <a className='signUp-btn' href='#'>
                  <i className='fa fa-user-o' />
                </a>
              </li>
              <li className='notification'>
              <Link to={'/cart'}>
              <span style={{textDecoration:"underline", color:"orange", }}>{cartCount}</span> 

                  <i className='fa fa-shopping-cart' />
                  </Link>
              
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse navbar-collapse' id='tp_main_menu'>
          <div className='logo-wrapper desktop-logo'>
            <Link to='/' className='main-logo'>
              <img
                src={publicUrl + 'assets/img/WEST_AFRICAN_T.png'}
                alt='logo'
              />
            </Link>
            <Link to='/' className='sticky-logo'>
              <img
                src={publicUrl + 'assets/img/WEST_AFRICAN_T.png'}
                alt='logo'
              />
            </Link>
          </div>
          <ul className='navbar-nav'>
            <li>
              <Link to='/'>Home</Link>
              {/* <ul className='sub-menu'>
                  <li>
                    <Link to='/'>Home 01</Link>
                  </li>
                  <li>
                    <Link to='/home-v2'>Home 02</Link>
                  </li>
                  <li>
                    <Link to='/home-v3'>Home 03</Link>
                  </li>
                </ul> */}
            </li>
            {/* <li>
              <Link to='/tours-list'>Packages</Link>
            </li> */}
            <li>
              <Link to='/destination-list'>Destinations</Link>
            </li>

            <li className='menu-item-has-children'>
              <a href='#'>Our Service</a>
              <ul className='sub-menu'>
                {/* <li>
                    <Link to='/tour-list'>Tours List</Link>
                  </li> */}
                <li>
                  <Link to='/tours-list'>Excursions</Link>
                </li>
                {/* <li>
                    <Link to='/tour-list-v3'>Tours List 03</Link>
                  </li> */}
                {/* <li>
                    <Link to='/tour-details'>Tours Details</Link>
                  </li> */}
                <li>
                  <Link to='/destination-list'>Destinations</Link>
                </li>
                {/* <li>
                    <Link to='/destination-list-v2'>Destination List 2</Link>
                  </li> */}
                {/* <li>
                    <Link to='/destination-details'>Destination Details</Link>
                  </li> */}
                {/* <li>
                    <Link to='/gallery'>Gallery</Link>
                  </li> */}
                <li>
                  <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/business-Services'>Info Service</Link>
                  </li>
                  <li>
                  <Link to='/transfer-services'>Transfer Service</Link>
                </li>
                {/* <li>
                    <Link to='/comming-soon'>Comming soon</Link>
                  </li>
                  <li>
                    <Link to='/error'>404</Link>
                  </li> */}
                <li>
                  <Link to='/faq'>FAQ</Link>
                </li>
                {/* <li>
                  <Link to='/user-profile'>User Profile</Link>
                </li> */}
              </ul>
            </li>
            {/* <li> 
                <Link to='/blog'>Blog</Link> 
                 <ul className='sub-menu'>
                  <li>
                    <Link to='/blog'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/blog-v2'>Blog 02</Link>
                  </li>
                  <li>
                    <Link to='/blog-v3'>Blog 03</Link>
                  </li>
                  <li>
                    <Link to='/blog-details'>Blog Details</Link>
                  </li>
                </ul>
                </li> */}
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            
          </ul>
        </div>
        <div className='nav-right-content'>
          <ul>
            {/* <li>
              <Link className='btn btn-yellow' to='/tours-list'>
                Book Now <i className='fa fa-paper-plane' />
              </Link>
            </li> */}
            {/* <li className='tp-lang'>
              <div className='tp-lang-wrap'>
                <select className='select single-select'>
                  <option value={1}>EN</option>
                  <option value={2}>FR</option>
                </select>
              </div>
            </li> */}
            {/* <li className='search'>
              <i className='ti-search' />
            </li> */}
            <li>
              {isLoggedIn ? (
                <Link to={'/user-profile'}>
                  <i className='ti-user' />
                </Link>
              ) : (
                <Link to={'/login'}>
                  <i className='ti-user' />
                </Link>
              )}
            </li>
            <li className='cart'>
            <Link to={'/cart'}>
            <i className='ti-shopping-cart' />
            <span title={`${cartCount} items in your cart`} style={{textDecoration:"underline", color:"white", fontWeight:600, border:'1px solid orange', bordereRadius:10,  background:'orange',padding:10}}>{cartCount}</span> 
            
        
             </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TourListNav
