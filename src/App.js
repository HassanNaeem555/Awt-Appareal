import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import MainLayout from "./layout/MainLayout";
import RenderRoutes from "./routes";
import { getApi } from "./utils/apiFunctions";
import { categories, web_setting } from "./utils/api";
import { getCategories } from "./store/action/categoryAction";
import { getWebSettings } from "./store/action/webSettingAction";
import "./App.css";
import "./responsive.css";

console.clear();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCategory() {
      const result = await getApi(categories);
      const { data } = await getApi(web_setting);
      dispatch(getCategories(result));
      dispatch(getWebSettings(data));
    }
    getCategory();
  }, [dispatch]);
  return (
    <Router>
      <MainLayout>
        <RenderRoutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={true}
          pauseOnHover
        />
      </MainLayout>
    </Router>
  );
};

export default App;
