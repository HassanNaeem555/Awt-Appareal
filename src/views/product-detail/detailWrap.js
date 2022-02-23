import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { ImageURL, OwnImageURL } from "../../utils/custom";

const DetailWrap = ({ product_data }) => {
  const [key, setKey] = useState("details-tab-1");
  return (
    <Tabs
      id="pills-tab"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="nav nav-pills mb-5"
    >
      <Tab eventKey="details-tab-1" title="Description">
        <div className="tab-pane fade show active">
          <div className="row align-items-center m-0">
            <div className="col-12 col-md-6 col-lg-5 mb-4">
              <div className="left-col">
                <p className="black-heading mb-3">
                  {product_data?.product_name}
                </p>
                <p className="paragraph">{product_data?.product_description}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="right-col">
                <img
                  src={`${ImageURL}product/${product_data?.product_image}`}
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="details-tab-2" title="Tags">
        <div className="tab-pane fade show active">
          <div className="row align-items-center m-0">
            <div className="col-12 col-md-6 col-lg-5 mb-4">
              <div className="left-col">
                <p className="black-heading mb-3">
                  Tags Sed ut Perspiciatis Unde Iste Natus Error Sit Voluptatem
                  Accusantium Doloremque
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="right-col">
                <img
                  src={`${OwnImageURL}/assets/images/productDetail-Sec3Img.jpg`}
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="details-tab-3" title="Review">
        <div className="tab-pane fade show active">
          <div className="row align-items-center m-0">
            <div className="col-12 col-md-6 col-lg-5 mb-4">
              <div className="left-col">
                <p className="black-heading mb-3">
                  Review Sed ut Perspiciatis Unde Iste Natus Error Sit
                  Voluptatem Accusantium Doloremque
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="right-col">
                <img
                  src={`${OwnImageURL}/assets/images/productDetail-Sec3Img.jpg`}
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default DetailWrap;
