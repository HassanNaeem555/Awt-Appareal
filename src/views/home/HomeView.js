import React, { useState, useLayoutEffect, useEffect } from "react";
import { useSelector } from "react-redux";
import HomeBanner from "../../components/home/homeBanner";
import ShopByCollection from "../../components/home/shopByCollection";
import HomeCenterBanner from "../../components/home/homeCenterBanner";
import BestSeller from "../../components/home/bestSellers";
import NewArrival from "../../components/home/newArrival";
import Testimonials from "../../components/home/testimonials";
// import InstagramApparealPost from "../../components/home/instagramApparealPost";
import Subscribe from "../../components/home/subscribe";
import { getApi } from "../../utils/apiFunctions";
import { banner, category_with_product, feed_back } from "../../utils/api";

const HomeView = () => {
  const [mainBanner, setMainBanner] = useState([]);
  const [categoryWithProducts, setCategoryWithProducts] = useState([]);
  const [renderSelectedCategory, setRenderSelectedCategory] = useState([]);
  const [feedBack, setFeedBack] = useState([]);
  const header_categories = useSelector(({ user_categories }) => {
    return user_categories.categories;
  });
  useEffect(() => {
    async function getBanner() {
      const selectedMenCategory = header_categories.find((e) => {
        return e.category_slug === "mens";
      });
      const selectedWomenCategory = header_categories.find((e) => {
        return e.category_slug === "women";
      });
      const selectedYouthCategory = header_categories.find((e) => {
        return e.category_slug === "youth";
      });
      const result = await getApi(banner);
      const { data } = await getApi(category_with_product);
      const { Feed_back } = await getApi(feed_back);
      setMainBanner(result);
      setFeedBack(Feed_back);
      setRenderSelectedCategory([
        selectedYouthCategory,
        selectedMenCategory,
        selectedWomenCategory,
      ]);
      if (data) {
        setCategoryWithProducts(data);
      }
    }
    if (mainBanner.length === 0) {
      getBanner();
    }
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeBanner bannerContent={mainBanner} />
      <ShopByCollection category={renderSelectedCategory} />
      <NewArrival categoryContainProducts={categoryWithProducts} />
      <HomeCenterBanner />
      <BestSeller category={renderSelectedCategory} />
      <Testimonials feedBack={feedBack} />
      {/* <InstagramApparealPost /> */}
      <Subscribe />
    </>
  );
};

export default HomeView;
