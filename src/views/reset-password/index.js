import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Control, Form, Errors, actions } from "react-redux-form";
import { required, maxLength, minLength } from "../../utils/custom";
import { updatePassword } from "../../utils/api";
import { postApi } from "../../utils/apiFunctions";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token = 0;
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);
  const onSubmit = async (values) => {
    setResetPasswordLoading(!resetPasswordLoading);
    const resetPasswordValues = JSON.parse(JSON.stringify(values));
    const { new_password, confirm_password } = resetPasswordValues;
    console.log("resetPasswordValues", resetPasswordValues);
    if (new_password !== confirm_password) {
      setResetPasswordLoading(false);
      toast.warn("Both Password Should Have To Be Same");
      return;
    } else {
      let data = {
        remember_token: token,
        password: new_password,
      };
      const { message, success } = await postApi(updatePassword, data);
      if (success) {
        dispatch(actions.reset("resetpassword"));
        setResetPasswordLoading(false);
        toast.success(message);
        navigate("/");
      } else {
        setResetPasswordLoading(false);
        toast.warn(message);
      }
    }
  };
  useEffect(() => {
    token = location.pathname.substring(15);
    console.log(token);
  }, [location.pathname]);
  return (
    <section className="section_not_found">
      <div className="not_fount_content">
        <div className="card login-modal reset-password">
          <h1 className="black-heading mb-3">Reset Password</h1>
          <Form
            model="resetpassword"
            onSubmit={(values) => onSubmit(values)}
            className={"w-80"}
          >
            <Control
              type="password"
              model=".new_password"
              id="password"
              name="password"
              placeholder="New Password"
              className="form-control"
              validators={{
                required,
                minLength: minLength(6),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger"
              model=".new_password"
              show="touched"
              messages={{
                required: "Required! ",
                minLength: "Must be greater than 6 characters",
                maxLength: "Must be 15 characters or less",
              }}
            />
            <Control
              type="password"
              model=".confirm_password"
              id="password"
              name="password"
              placeholder="Confirm Password"
              className="form-control"
              validators={{
                required,
                minLength: minLength(6),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger"
              model=".confirm_password"
              show="touched"
              messages={{
                required: "Required! ",
                minLength: "Must be greater than 6 characters",
                maxLength: "Must be 15 characters or less",
              }}
            />
            <button className="cta-btn submit mt-3" type="submit">
              {resetPasswordLoading ? (
                <Spinner animation="border" variant="light" size="sm" />
              ) : (
                "Reset Password"
              )}
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
