import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
        <ToastContainer
          icon={false}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </MainLayout>
    </Router>
  );
};

export default App;
