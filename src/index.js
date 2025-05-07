import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeV1 from "./components/home-v1";

import AboutUs from "./components/about";

import TourListV2 from "./components/tour-list-v2";

import TourDetails from "./components/tour-details";
import DestinationLIst from "./components/destination-list";
import DestinationLIstV2 from "./components/destination-list-v2";
import DestinationDetails from "./components/destination-details";

import GalleryDetails from "./components/gallery-details";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Error from "./components/error";
import CommingSoon from "./components/comming-soon";
import UserProfile from "./components/user-profile";
import Blog from "./components/blog";
import BlogV2 from "./components/blog-v2";
import BlogV3 from "./components/blog-v3";
import BlogDetails from "./components/blog-details";
import Login from "./components/Login";
import Signup from "./components/Signup";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { SuggestProvider } from "./components/SuggestProvider";
import { LoaderProvider } from "./components/LoaderProvider";
import Transfer from "./components/transfer";

import { CartProvider } from "./components/CartProvider";
import { CartCounterProvider } from "./components/CartCounterProvider";
import CartCustom from "./components/cart-custom";
import SpecialExursions from "./components/special-excursions";
import SpecialExcursion from "./components/special-excursion";
import { Toaster } from "react-hot-toast";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Toaster position="top-center" reverseOrder={false} />
        <SuggestProvider>
          <LoaderProvider>
            <CartCounterProvider>
              <CartProvider>
                <div>
                  <Switch>
                    <Route exact path="/" component={HomeV1} />
                    {/* <Route path='/home-v2' component={HomeV2} />
            <Route path='/home-v3' component={HomeV3} /> */}
                    <Route path="/about" component={AboutUs} />
                    {/* <Route path='/tour-list' component={TourList} /> */}
                    <Route path="/tours-list" component={TourListV2} />
                    {/* <Route path='/tour-list-v3' component={TourListV3} /> */}
                    <Route path="/tour-details" component={TourDetails} />
                    <Route
                      path="/destination-list"
                      component={DestinationLIst}
                    />
                    <Route path="/transfer-services" component={Transfer} />
                    <Route
                      path="/destination-list-full"
                      component={DestinationLIstV2}
                    />
                    <Route
                      path="/destination-details/:id"
                      component={DestinationDetails}
                    />
                    {/* <Route path='/gallery' component={Gallery} /> */}
                    <Route path="/gallery" component={GalleryDetails} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/error" component={Error} />
                    <Route path="/comming-soon" component={CommingSoon} />
                    <Route path="/user-profile" component={UserProfile} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/blog-v2" component={BlogV2} />
                    <Route path="/blog-v3" component={BlogV3} />
                    <Route path="/business-Services" component={BlogDetails} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/cart" component={CartCustom} />
                    <Route
                      path="/special-excursions/:id"
                      component={SpecialExcursion}
                    />
                    <Route
                      path="/special-excursions/"
                      component={SpecialExursions}
                    />

                    {/* <Route patch= */}
                    {/* <Route path='/tour-details/:id' children={<TourDetails />} /> */}
                  </Switch>
                </div>
              </CartProvider>
            </CartCounterProvider>
          </LoaderProvider>
        </SuggestProvider>
      </BrowserRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
