import React, { useLayoutEffect } from "react";
import HomeBanner from "../../components/home/homeBanner";
import ShopByCollection from "../../components/home/shopByCollection";
import HomeCenterBanner from "../../components/home/homeCenterBanner";
import BestSeller from "../../components/home/bestSellers";
import NewArrival from "../../components/home/newArrival";
import Testimonials from "../../components/home/testimonials";
import InstagramApparealPost from "../../components/home/instagramApparealPost";
import Subscribe from "../../components/home/subscribe";

function HomeView() {
  useLayoutEffect(() => {
    console.log("home");
    window.scrollTo(0, 0);
  });
  return (
    <>
      <HomeBanner />
      <ShopByCollection />
      <NewArrival />
      <HomeCenterBanner />
      <BestSeller />
      <Testimonials />
      <InstagramApparealPost />
      <Subscribe />
    </>
  );
}

export default HomeView;
