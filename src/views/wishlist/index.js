import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/action/wishListAction";
import { toast } from "react-toastify";
import { ImageURL } from "../../utils/custom";
import CommonBanner from "../../components/commonBanner";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_wishlist = useSelector(({ user_wishlist }) => {
    return user_wishlist.wislist;
  });
  const deleteFromWishlist = (e, id) => {
    e.preventDefault();
    dispatch(removeFromWishlist(id));
    toast.warn("Remove From Wishlist");
  };
  return (
    <>
      <CommonBanner img={"cart-sec1"} name={"WISHLIST"} />
      <section className="cart-sec-2">
        <div className="container">
          <div className="row">
            <div className={"col-lg-12 col-md-12 col-sm-12 mb-4"}>
              <div className="cart-list">
                {user_wishlist.length > 0 ? (
                  user_wishlist.map((item, index) => {
                    return (
                      <div className="cart-list-item" key={index}>
                        <div className="product-img">
                          <img
                            src={`${ImageURL}product/${item?.product_image}`}
                            className="img-fluid"
                            alt="product"
                          />
                        </div>
                        <div className="product-name">
                          <p className="name">{item?.product_name}</p>
                          <p className="price">${item?.product_price}</p>
                        </div>
                        <div className="product-action-price y-center">
                          <p>${item?.product_price}</p>
                          <button
                            className="remove-cart-item"
                            onClick={(e) => {
                              deleteFromWishlist(e, item?.id);
                            }}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <section className="section_not_found">
                    <div className="not_fount_content">
                      <h2>We can't find anything</h2>
                      <p className="paragraph mb-4">
                        We're fairly sure that nothing is present in your
                        wishlist,please add something and come back here.
                      </p>
                    </div>
                    <button
                      className="cta-btn"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      BACK TO HOME
                    </button>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
