import React, { Suspense, Fragment, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/home/HomeView";
import NotFoundView from "./views/errors/NotFoundView";

export const RenderRoutes = () => (
  // <Suspense fallback={<LoadingScreen />}>
  <Suspense>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  </Suspense>
);

export default RenderRoutes;
