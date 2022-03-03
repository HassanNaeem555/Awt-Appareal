import React from "react";
import { Modal, Spinner } from "react-bootstrap";

const ProfileFooter = ({ sendingPrefabs }) => {
  const {
    isUsernameChanged,
    isAddressChanged,
    isPhoneNumberChanged,
    isPasswordChanged,
    toggleUsernameModal,
    toggleAddressModal,
    togglePhoneNumberModal,
    togglePasswordChangedModal,
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
  } = sendingPrefabs;
  return (
    <>
      <Modal
        className="modal payment-popup fade"
        centered={true}
        onHide={toggleUsernameModal}
        show={isUsernameChanged}
      >
        <Modal.Body>
          <div className="popup-head">
            <h6>Change Your User Name</h6>
            <p>
              <span>Enter a new user name and your existing password.</span>{" "}
            </p>
            <button onClick={toggleUsernameModal} className="close close-btn">
              <span>&times;</span>
            </button>
          </div>
          <div className="credit-card-info">
            <form onSubmit={changeCurrentUserName}>
              <input
                type="text"
                name="user_name"
                maxLength="30"
                placeholder="User Name"
                className="card-input"
                value={changeUserName}
                onChange={(e) => {
                  setChangeUserName(e.target.value);
                }}
                required
              />
              <button type="submit" className="card-btn">
                {changeNameLoading ? (
                  <Spinner animation="border" variant="dark" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        className="modal payment-popup fade"
        centered={true}
        onHide={toggleAddressModal}
        show={isAddressChanged}
      >
        <Modal.Body>
          <div className="popup-head">
            <h6>Change Your Address</h6>
            <p>
              <span>{address ? "Enter A New Address." : "Add A Address."}</span>{" "}
            </p>
            <button onClick={toggleAddressModal} className="close close-btn">
              <span>&times;</span>
            </button>
          </div>
          <div className="credit-card-info">
            <form onSubmit={changeCurrentUserAddress}>
              <input
                type="text"
                name="user_address"
                maxLength="30"
                placeholder="New Address"
                className="card-input"
                value={changeUserAddress}
                onChange={(e) => {
                  setChangeUserAddress(e.target.value);
                }}
                required
              />
              <button type="submit" className="card-btn">
                {changeAddressLoading ? (
                  <Spinner animation="border" variant="dark" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        className="modal payment-popup fade"
        centered={true}
        onHide={togglePhoneNumberModal}
        show={isPhoneNumberChanged}
      >
        <Modal.Body>
          <div className="popup-head">
            <h6>
              {phone_number ? "Change Your Phone Number" : "Add A Phone Number"}
            </h6>
            <p>
              <span>
                {phone_number ? "Enter A New Number." : "Add A Number."}
              </span>{" "}
            </p>
            <button
              className="close close-btn"
              onClick={togglePhoneNumberModal}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="credit-card-info">
            <form onSubmit={changeCurrentUserPhno}>
              <input
                type="tel"
                name="user_phone_number"
                maxLength="15"
                placeholder="New Phone Number"
                className="card-input"
                value={changeUserPhno}
                onChange={(e) => {
                  setChangeUserPhno(e.target.value);
                }}
                required
              />
              <button type="submit" className="card-btn">
                {changeUserPhnoLoading ? (
                  <Spinner animation="border" variant="dark" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        className="modal payment-popup fade"
        centered={true}
        onHide={togglePasswordChangedModal}
        show={isPasswordChanged}
      >
        <Modal.Body>
          <div className="popup-head">
            <h6>Chanege Your Password</h6>
            <p>
              <span>Enter a new password.</span>{" "}
            </p>
            <button
              className="close close-btn"
              onClick={togglePasswordChangedModal}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="credit-card-info">
            <form onSubmit={changeCurrentPassword}>
              <input
                type="password"
                name="new_password"
                maxLength="30"
                placeholder="New Password"
                className="card-input"
                value={newPasswordUser}
                onChange={(e) => {
                  setNewPasswordUser(e.target.value);
                }}
                required
              />
              <input
                type="password"
                name="confirm_password"
                maxLength="15"
                placeholder="Confirm Password"
                className="card-input"
                value={confirmPasswordUser}
                onChange={(e) => {
                  setConfirmPasswordUser(e.target.value);
                }}
                required
              />
              <button type="submit" className="card-btn">
                {changePasswordLoading ? (
                  <Spinner animation="border" variant="dark" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileFooter;
