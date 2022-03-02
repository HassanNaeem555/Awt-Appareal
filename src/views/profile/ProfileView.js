import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogedOut } from "../../store/action/authAction";
import { getApi } from "../../utils/apiFunctions";
import { user_order_detail } from "../../utils/api";
import DataTable from "react-data-table-component";
import ProfileHeader from "./profileHeader";
import ProfileFooter from "./profileFooter";
import "./profile.css";
import "./profileresponsive.css";

const ProfileView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, full_name, id, phone_number, user_status, address, profile } =
    useSelector(({ user_authenticate }) => {
      return user_authenticate.user;
    });
  const [key, setKey] = useState("profile-tab-1");
  const [isUsernameChanged, setIsUsernameChanged] = useState(false);
  const [isAddressChanged, setIsAddressChanged] = useState(false);
  const [isPhoneNumberChanged, setIsPhoneNumberChanged] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [ordersData, setOrdersData] = useState([]);
  const toggleUsernameModal = () => {
    setIsUsernameChanged(!isUsernameChanged);
  };
  const toggleAddressModal = () => {
    setIsAddressChanged(!isAddressChanged);
  };
  const togglePhoneNumberModal = () => {
    setIsPhoneNumberChanged(!isPhoneNumberChanged);
  };
  const togglePasswordChangedModal = () => {
    setIsPasswordChanged(!isPasswordChanged);
  };
  const signOut = () => {
    dispatch(userLogedOut(navigate));
  };
  const columns = [
    {
      name: "ORDER ID",
      selector: (row) => row.random_order_id,
    },
    {
      name: "ORDER DATE",
      selector: (row) => new Date(row.created_at).toLocaleString(),
    },
    {
      name: "STATUS",
      selector: (row) => row.order_status,
    },
    {
      name: "PRICE",
      selector: (row) => "$" + row.total,
    },
    {
      name: "CITY",
      selector: (row) => row.shipping_city,
    },
    // {
    //   name: "ACTION",
    //   selector: (row) => row.total,
    // },
  ];
  const sendingPrefabs = {
    isUsernameChanged,
    isAddressChanged,
    isPhoneNumberChanged,
    isPasswordChanged,
    toggleUsernameModal,
    toggleAddressModal,
    togglePhoneNumberModal,
    togglePasswordChangedModal,
  };
  const getOrders = async () => {
    const { data, success } = await getApi(
      `${user_order_detail}?user_id=${id}`
    );
    if (success) {
      setOrdersData(data?.data);
      console.log("data?.data", data?.data);
    } else {
      console.log("result", success);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <ProfileHeader name={full_name} image={profile} />
      <section className="dashboard-sec">
        <div className="row">
          <div className="mobile-wrap">
            <aside>
              <button type="button" className="toogle-close-btn">
                <i className="fa fa-times"></i>
              </button>
              <div className="side-logo">
                <span onClick={() => navigate("/")} className="cursor-pointer">
                  <img
                    src="assets/images/admin/dash-logo.png"
                    className="img-fluid"
                    alt="img-fluid"
                  />
                </span>
              </div>
              <div className="user-profile">
                <div className="profile-image">
                  <img
                    src="assets/images/admin/user-image.jpg"
                    className="img-fluid"
                    alt="img-fluid"
                  />
                </div>
                <div className="user-name">
                  <p>
                    Hi,
                    <br />
                    <strong>{full_name}</strong>
                  </p>
                </div>
              </div>
              <div className="dashboard-links">
                <div className="nav flex-column nav-pills">
                  <span
                    className={
                      key === "profile-tab-1" ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setKey("profile-tab-1")}
                  >
                    <i className="fa fa-user"></i> Profile
                  </span>
                  <span
                    className={
                      key === "profile-tab-2" ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setKey("profile-tab-2")}
                  >
                    <i className="fa fa-shopping-cart"></i> Orders
                  </span>
                  <span className="nav-link" onClick={signOut}>
                    <i className="fa fa-sign-out"></i> Logout
                  </span>
                  <span className="nav-link" onClick={() => navigate("/")}>
                    <i className="fa fa-home"></i> Back to home
                  </span>
                </div>
              </div>
            </aside>
          </div>
          <div className="right-box-wrap">
            <div className="tab-content" id="v-pills-tabContent">
              {key === "profile-tab-1" ? (
                <div className="tab-pane fade show active">
                  <h5 className="black-head">Welcome to Your Account</h5>
                  <div className="user-info-box">
                    <div className="avatar-upload">
                      <div className="avatar-edit">
                        <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label htmlFor="imageUpload">
                          <i className="fa fa-plus"></i>
                        </label>
                      </div>
                      <div className="avatar-preview">
                        <div
                          id="imagePreview"
                          style={{
                            backgroundImage: `url("assets/images/admin/user-image.jpg")`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="user-detail-box">
                        <div className="details">
                          <label>Full Name</label>
                          <p>{full_name}</p>
                        </div>
                        <div className="edit-btn">
                          <span onClick={toggleUsernameModal}>Edit</span>
                        </div>
                      </div>
                      <div className="user-detail-box">
                        <div className="details">
                          <label>Address</label>
                          <p>
                            {address
                              ? address
                              : "You haven’t added an address yet"}
                          </p>
                        </div>
                        <div className="edit-btn">
                          <span onClick={toggleAddressModal}>
                            {address ? "Add" : "Edit"}
                          </span>
                        </div>
                      </div>
                      <div className="user-detail-box">
                        <div className="details">
                          <label>Phone Number</label>
                          <p>
                            {phone_number
                              ? phone_number
                              : "You haven’t added a phone number yet"}
                          </p>
                        </div>
                        <div className="edit-btn">
                          <span onClick={togglePhoneNumberModal}>
                            {phone_number ? "Add" : "Edit"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="change-pass-wrap">
                    <h5 className="black-head m-0">
                      Password & Authentication
                    </h5>
                    <div className="pass-btn-box">
                      <span
                        className="black-btn cursor-pointer"
                        onClick={togglePasswordChangedModal}
                      >
                        Change Password
                      </span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.{" "}
                    </p>
                  </div>
                </div>
              ) : key === "profile-tab-2" ? (
                <div className="tab-pane fade show active">
                  <h5 className="black-head">My Orders</h5>
                  <div className="order-detail-box">
                    <DataTable
                      className="display nowrap"
                      columns={columns}
                      data={ordersData}
                      pagination
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <ProfileFooter sendingPrefabs={sendingPrefabs} />
    </>
  );
};

export default ProfileView;
