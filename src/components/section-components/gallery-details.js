import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

class GalleryDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
      <div className='gallery-area pd-top-108'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h2 className='title'>Beautiful Destinations of West Africa</h2>
                <p>
                  Come and enjoy being a part of a unique and vibrant culture.
                  We welcome you to experience Africa and all the beauty it has
                  to offer.
                </p>
              </div>
            </div>
          </div>
          {/* Gallery area start */}
          <div className='gallery-area'>
            <div className='container'>
              <div className='gallery-filter-area row'>
                <div className='gallery-sizer col-1' />
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/senegal (1).jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/gallery/senegal (1).jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/the-gambia.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/gallery/the-gambia.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/Makasutu.JPG'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/gallery/Makasutu.JPG'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/maskk.JPG'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/gallery/maskk.JPG'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/Explore-Gambia.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={
                          publicUrl + 'assets/img/gallery/Explore-Gambia.jpg'
                        }
                        alt='image'
                      />
                    </a>
                  </div>
                </div>

                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/Ghana.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/gallery/Ghana.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-6 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/senegal.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/senegal.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-6 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img105.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img105.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>

                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/wat3.png'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/wat3.png'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>

                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/wat1.png'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/wat1.png'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
         {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img101.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img101.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                         {/* gallery-item */}
                         <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img102.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img102.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                         {/* gallery-item */}
                         <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img103.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img103.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                 {/* gallery-item */}
                 <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img104.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img104.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                         {/* gallery-item */}
                         <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img106.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img106.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                         {/* gallery-item */}
                         <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img107.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img107.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img1014.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img1014.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                         {/* gallery-item */}
                         <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img1011.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img1011.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                         {/* gallery-item */}
                         <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/TourGallery/img1010.jpg'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/TourGallery/img1010.jpg'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>
                {/* gallery-item */}
                <div className='tp-gallery-item col-md-4 col-12'>
                  <div className='tp-gallery-item-img'>
                    <a
                      className='popup-thumb'
                      href={publicUrl + 'assets/img/wat2.png'}
                      data-effect='mfp-zoom-in'
                    >
                      <img
                        src={publicUrl + 'assets/img/wat2.png'}
                        alt='image'
                      />
                    </a>
                  </div>
                </div>


                
              </div>
            </div>
          </div>
          {/* Gallery area end */}
        </div>
      </div>
    )
  }
}

export default GalleryDetails
