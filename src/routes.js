import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeView from "./views/home/HomeView";
import CartView from "./views/cart/CartView";
import CheckoutView from "./views/checkout/CheckoutView";
import ProductDetail from "./views/product-detail";
import Category from "./views/categories";
import Search from "./views/search";
import AboutView from "./views/about/AboutView";
import PrivacyPolicy from "./views/cms/privacyPolicy";
import ProfileView from "./views/profile/ProfileView";
import ContactView from "./views/contact/ContactView";
import NotFoundView from "./views/errors/NotFoundView";

export const RenderRoutes = () => {
  const user_authenticate = useSelector(({ user_authenticate }) => {
    return user_authenticate.userLogin;
  });
  const user_cart = useSelector(({ user_cart }) => {
    return user_cart.cart;
  });
  return (
    // <Suspense fallback={<LoadingScreen />}>
    <Suspense>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        {user_cart.length > 0 && (
          <>
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<CheckoutView />} />
          </>
        )}
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {user_authenticate && (
          <Route path="/user-profile" element={<ProfileView />} />
        )}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  );
};

export default RenderRoutes;
