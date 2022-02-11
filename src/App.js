import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import RenderRoutes from "./routes";
import "./App.css";
import "./responsive.css";

console.clear();

const App = () => {
  return (
    <Router>
      <MainLayout>
        <RenderRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
