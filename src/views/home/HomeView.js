import React from "react";
import HomeBanner from "../../components/home/homeBanner";
import ShopByCollection from "../../components/home/shopByCollection";
import HomeCenterBanner from "../../components/home/homeCenterBanner";
import BestSeller from "../../components/home/bestSellers";
import NewArrival from "../../components/home/newArrival";
import Testimonials from "../../components/home/testimonials";
import InstagramApparealPost from "../../components/home/instagramApparealPost";
import Subscribe from "../../components/home/subscribe";

function HomeView() {
  return (
    <>
      <HomeBanner />
      <ShopByCollection />
      <HomeCenterBanner />
      <BestSeller />
      <NewArrival />
      <Testimonials />
      <InstagramApparealPost />
      <Subscribe />
    </>
  );
}

export default HomeView;
