import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import MainLayout from "./layout/MainLayout";
import RenderRoutes from "./routes";
import { getApi } from "./utils/apiFunctions";
import { categories } from "./utils/api";
import { getCategories } from "./store/action/categoryAction";
import "./App.css";
import "./responsive.css";

console.clear();

const App = () => {
  const dispatch = useDispatch();
  // const header_categories = useSelector(({ user_categories }) => {
  //   return user_categories.categories;
  // });
  useEffect(() => {
    async function getCategory() {
      const result = await getApi(categories);
      dispatch(getCategories(result));
    }
    getCategory();
    // if (header_categories.length !== 0) {
    //   console.log("api hit for categories");
    // } else {
    //   console.log("api not hit for categories", header_categories.length);
    // }
  }, []);
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
