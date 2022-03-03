import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userAuth, userLogedOut } from "../../store/action/authAction";
import { toggleAuthModal } from "../../store/action/webSettingAction";
import { getApi, postApi } from "../../utils/apiFunctions";
import {
  user_order_detail,
  update_profile,
  confirm_profile,
} from "../../utils/api";
import { ImageURL } from "../../utils/custom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import DataTable from "react-data-table-component";
import ProfileHeader from "./profileHeader";
import ProfileFooter from "./profileFooter";
import axios from "../../utils/axios";
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
  const [changeNameLoading, setChangeNameLoading] = useState(false);
  const [changeUserName, setChangeUserName] = useState("");
  const [changeUserAddress, setChangeUserAddress] = useState("");
  const [changeUserPhno, setChangeUserPhno] = useState("");
  const [newPasswordUser, setNewPasswordUser] = useState("");
  const [confirmPasswordUser, setConfirmPasswordUser] = useState("");
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);
  const [changeAddressLoading, setChangeAddressLoading] = useState(false);
  const [changeUserPhnoLoading, setChangeUserPhnoLoading] = useState(false);
  const [changeUserImageLoading, setChangeUserImageLoading] = useState(false);
  const [isUsernameChanged, setIsUsernameChanged] = useState(false);
  const [isAddressChanged, setIsAddressChanged] = useState(false);
  const [isPhoneNumberChanged, setIsPhoneNumberChanged] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ordersData, setOrdersData] = useState([]);
  const [addOrdersData, setAddOrdersData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

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
  const toggleShowOrderDetailModal = () => {
    setShowOrderDetail(!showOrderDetail);
  };
  const signOut = () => {
    dispatch(userLogedOut(navigate));
    toast.success("Logged Out Successful");
  };
  const changeCurrentUserName = async (e) => {
    e.preventDefault();
    setChangeNameLoading(!changeNameLoading);
    let data = {
      user_id: id,
      full_name: changeUserName,
    };
    const { message, success, users } = await postApi(update_profile, data);
    if (success) {
      dispatch(userAuth(users));
      toast.success(message);
      setChangeNameLoading(false);
      setChangeUserName("");
      toggleUsernameModal();
    } else {
      toast.warn(message);
      setChangeNameLoading(false);
    }
  };
  const changeCurrentUserAddress = async (e) => {
    e.preventDefault();
    setChangeAddressLoading(!changeAddressLoading);
    let data = {
      user_id: id,
      address: changeUserAddress,
    };
    const { message, success, users } = await postApi(update_profile, data);
    if (success) {
      dispatch(userAuth(users));
      toast.success(message);
      setChangeAddressLoading(false);
      setChangeUserAddress("");
      toggleAddressModal();
    } else {
      toast.warn(message);
      setChangeAddressLoading(false);
    }
  };
  const changeCurrentUserPhno = async (e) => {
    e.preventDefault();
    setChangeUserPhnoLoading(!changeUserPhnoLoading);
    let data = {
      user_id: id,
      phone_number: changeUserPhno,
    };
    const { message, success, users } = await postApi(update_profile, data);
    if (success) {
      dispatch(userAuth(users));
      toast.success(message);
      setChangeUserPhnoLoading(false);
      setChangeUserPhno("");
      togglePhoneNumberModal();
    } else {
      toast.warn(message);
      togglePhoneNumberModal(false);
    }
  };
  const changeCurrentPassword = async (e) => {
    e.preventDefault();
    if (newPasswordUser !== confirmPasswordUser) {
      toast.warn("Password Donot Match");
      return;
    }
    let data = {
      email,
      password: newPasswordUser,
    };
    setChangePasswordLoading(!changePasswordLoading);
    const { message, success } = await postApi(confirm_profile, data);
    if (success) {
      setChangePasswordLoading(false);
      dispatch(userLogedOut(navigate));
      dispatch(toggleAuthModal());
      toast.success(message);
    } else {
      toast.warn(message);
      setChangePasswordLoading(false);
    }
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
      name: "SHIPPING ADDRESS",
      selector: (row) => row.shipping_address_one,
    },
    {
      name: "ACTION",
      cell: (row) => (
        <i
          className="fa fa-eye cursor-pointer text-center font-20 color-primary"
          onClick={(e) => clickHandler(e, row)}
          title="Order Detail"
        ></i>
      ),
    },
  ];
  const sendingPrefabs = {
    isUsernameChanged,
    isAddressChanged,
    isPhoneNumberChanged,
    isPasswordChanged,
    showOrderDetail,
    toggleUsernameModal,
    toggleAddressModal,
    togglePhoneNumberModal,
    togglePasswordChangedModal,
    toggleShowOrderDetailModal,
    changeUserName,
    setChangeUserName,
    changeUserAddress,
    setChangeUserAddress,
    changeUserPhno,
    setChangeUserPhno,
    changeCurrentUserName,
    changeCurrentUserAddress,
    changeCurrentUserPhno,
    changeCurrentPassword,
    changeNameLoading,
    changeAddressLoading,
    changeUserPhnoLoading,
    newPasswordUser,
    confirmPasswordUser,
    changePasswordLoading,
    setNewPasswordUser,
    setConfirmPasswordUser,
    phone_number,
    address,
  };
  const getOrders = async (page) => {
    setLoading(true);
    const { data, success } = await getApi(
      `${user_order_detail}?user_id=${id}&page=${page}`
    );
    if (success) {
      setOrdersData(data?.data);
      setTotalRows(data?.total);
      setLoading(false);
    } else {
      console.log("result", success);
    }
  };
  const handlePageChange = (page) => {
    getOrders(page);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    const { data, success } = await getApi(
      `${user_order_detail}?user_id=${id}&page=${page}`
    );
    if (success) {
      console.log("result", success);
      setOrdersData(data?.data);
      setPerPage(newPerPage);
      setTotalRows(data?.total);
      setLoading(false);
    } else {
      setPerPage(0);
      setTotalRows(0);
      setLoading(false);
    }
  };
  const clickHandler = (event, data) => {
    event.preventDefault();
    setAddOrdersData(data?.order_items);
    console.log("data", data);
    toggleShowOrderDetailModal();
  };
  const getProfileImage = (e) => {
    e.preventDefault();
    setChangeUserImageLoading(!changeUserImageLoading);
    const selectedFile = e.target.files[0];
    const selectedFileName = selectedFile?.name;
    const formData = new FormData();
    formData.append("profile", selectedFile, selectedFileName);
    formData.append("user_id", id);
    axios({
      method: "post",
      url: update_profile,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        const { data } = response;
        dispatch(userAuth(data?.users));
        toast.success(data?.message);
        setChangeUserImageLoading(false);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        setChangeUserImageLoading(false);
      });
  };
  useEffect(() => {
    getOrders(1);
  }, []);
  return (
    <>
      <ProfileHeader name={full_name} image={profile} url={ImageURL} />
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
                    src={
                      profile
                        ? `${ImageURL}/profile/${profile}`
                        : "assets/images/admin/user-image.jpg"
                    }
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
                      {changeUserImageLoading ? (
                        <div className="avatar-preview">
                          <div id="imagePreview">
                            <SkeletonTheme
                              baseColor="#ebebeb"
                              highlightColor="#f5f5f5"
                            >
                              <Skeleton
                                count={1}
                                height={90}
                                borderRadius={50}
                              />
                            </SkeletonTheme>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="avatar-edit">
                            <input
                              type="file"
                              id="imageUpload"
                              onChange={getProfileImage}
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
                                backgroundImage: `url(${
                                  profile
                                    ? `${ImageURL}/profile/${profile}`
                                    : "assets/images/admin/user-image.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                        </>
                      )}
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
                            {address ? "Edit" : "Add"}
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
                            {phone_number ? "Edit" : "Add"}
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
                      progressPending={loading}
                      pagination
                      paginationServer
                      paginationTotalRows={totalRows}
                      progressComponent={<CustomLoader />}
                      onChangeRowsPerPage={handlePerRowsChange}
                      onChangePage={handlePageChange}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <ProfileFooter sendingPrefabs={sendingPrefabs} />
      <Modal
        className="modal orderDetail-popup fade"
        centered={true}
        onHide={toggleShowOrderDetailModal}
        show={showOrderDetail}
      >
        <Modal.Body>
          <button className="close" onClick={toggleShowOrderDetailModal}>
            <span>
              <i className="fa fa-times"></i>
            </span>
          </button>
          <div className="order-list-header">
            <span>Product Image</span>
            <span>Product Name</span>
            <span>Product Quantity</span>
            <span>Product Price</span>
          </div>
          <div className="orderListing-wrap">
            {addOrdersData.map((item, index) => {
              return (
                <div className="cart-list-item" key={index}>
                  <div className="product-img">
                    <img
                      src={`${ImageURL}product/${item?.product?.product_image}`}
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="product-name">
                    <p className="name">{item?.product_name}</p>
                    <p className="price">${item?.product?.product_price}.00</p>
                  </div>
                  <div className="product-quantity-wrap y-center">
                    <div className="quaitity-box d-flex">
                      <div className="plus-minus">
                        <input
                          type="tel"
                          className="count"
                          name="qty"
                          value={item?.quantity}
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product-action-price y-center">
                    <p>${item?.product_price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileView;

const CustomLoader = () => {
  return (
    <div style={{ minHeight: "400px", maxHeight: "400px", maxWidth: "400px" }}>
      <img
        className="img-fluid w-100"
        src="assets/gif/Ajux_loader.gif"
        alt="Computer man"
      />
    </div>
  );
};
