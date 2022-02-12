import React, { Suspense, Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/home/HomeView";
import Category from "./views/categories";
import AboutView from "./views/about/AboutView";
import PrivacyPolicy from "./views/cms/privacyPolicy";
import ContactView from "./views/contact/ContactView";
import NotFoundView from "./views/errors/NotFoundView";

export const RenderRoutes = () => (
  // <Suspense fallback={<LoadingScreen />}>
  <Suspense>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/:id" element={<Category />} />
      <Route path="/contact" element={<ContactView />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  </Suspense>
);

export default RenderRoutes;
