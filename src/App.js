import React, { useState, useLayoutEffect, useEffect } from "react";
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
  const [isDisconnected, setIsDisconnected] = useState(false);
  const handleConnectionChange = () => {
    const condition = navigator.onLine ? "online" : "offline";
    if (condition === "online") {
      const webPing = setInterval(() => {
        fetch("//google.com", {
          mode: "no-cors",
        })
          .then(() => {
            setIsDisconnected(false, () => {
              return clearInterval(webPing);
            });
          })
          .catch(() => setIsDisconnected(true));
      }, 2000);
      return;
    }

    return setIsDisconnected(true);
  };
  useEffect(() => {
    async function getCategory() {
      const result = await getApi(categories);
      const { data } = await getApi(web_setting);
      dispatch(getCategories(result));
      dispatch(getWebSettings(data));
    }
    getCategory();
  }, [dispatch]);
  useLayoutEffect(() => {
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);
    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  });
  return (
    <Router>
      {isDisconnected && (
        <div className="internet-error">
          <p>Internet connection lost....</p>
        </div>
      )}
      <MainLayout>
        <RenderRoutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          progressStyle={{ backgroundColor: "#fff" }}
          icon={false}
          newestOnTop={false}
          rtl={false}
          draggable={true}
          toastStyle={{
            backgroundColor: "#006eb7",
            color: "#fff",
            fontSize: 15,
            fontWeight: "600",
          }}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
        />
      </MainLayout>
    </Router>
  );
};

export default App;
