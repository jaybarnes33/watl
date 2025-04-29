import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';
import Ads from './section-components/ads';

const BlogDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Business Services"  />
        <BlogDetails />
        {/* <Subscribe />
      <Ads /> */}
        
        <Footer />
    </div>
}

export default BlogDetailsPage

