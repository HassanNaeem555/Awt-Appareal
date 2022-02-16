import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MainLayout = ({ children }) => {
  let location = useLocation();
  const user_authenticate = useSelector(({ user_authenticate }) => {
    return user_authenticate.userLogin;
  });
  return (
    <>
      {user_authenticate && location.pathname === "/user-profile" ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
