import React from "react";
import { Modal } from "react-bootstrap";

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
            <form>
              <input
                type="text"
                name=""
                maxLength="20"
                placeholder="User Name"
                className="card-input"
              />
              <input
                type="password"
                name=""
                maxLength="15"
                placeholder="Current Password"
                className="card-input"
              />
              <button type="submit" className="card-btn">
                Submit
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
              <span>Enter a new address and your existing password.</span>{" "}
            </p>
            <button onClick={toggleUsernameModal} className="close close-btn">
              <span>&times;</span>
            </button>
          </div>
          <div className="credit-card-info">
            <form>
              <input
                type="text"
                name=""
                maxLength="30"
                placeholder="New Address"
                className="card-input"
              />
              <input
                type="text"
                name=""
                maxLength="30"
                placeholder="Address 2"
                className="card-input"
              />
              <input
                type="password"
                name=""
                maxLength="15"
                placeholder="Current Password"
                className="card-input"
              />
              <button type="submit" className="card-btn">
                Submit
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
            <h6>Change Your Phone Number</h6>
            <p>
              <span>Enter a new number and your existing password.</span>{" "}
            </p>
            <button className="close close-btn">
              <span>&times;</span>
            </button>
          </div>
          <div className="credit-card-info">
            <form>
              <input
                type="tel"
                name=""
                maxLength="15"
                placeholder="New Phone Number"
                className="card-input"
              />
              <input
                type="password"
                name=""
                maxLength="15"
                placeholder="Current Password"
                className="card-input"
              />
              <button type="submit" className="card-btn">
                Submit
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
            <form>
              <input
                type="password"
                name=""
                maxLength="30"
                placeholder="New Password"
                className="card-input"
              />
              <input
                type="password"
                name=""
                maxLength="15"
                placeholder="Confirm Password"
                className="card-input"
              />
              <button type="submit" className="card-btn">
                Submit
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileFooter;
