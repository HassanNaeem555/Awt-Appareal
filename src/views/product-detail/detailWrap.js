import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import TextLoader from "../../components/textLoader";
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
                {product_data?.product_name ? (
                  <p className="black-heading mb-3">
                    {product_data?.product_name}
                  </p>
                ) : product_data?.product_name === null ? null : (
                  <TextLoader height={"5%"} width={"100%"} />
                )}
                {product_data?.product_description ? (
                  <p className="paragraph">
                    {product_data?.product_description}
                  </p>
                ) : product_data?.product_description === null ? null : (
                  <>
                    <TextLoader height={"5%"} width={"80%"} />
                    <TextLoader height={"5%"} width={"80%"} />
                    <TextLoader height={"5%"} width={"80%"} />
                    <TextLoader height={"5%"} width={"80%"} />
                    <TextLoader height={"5%"} width={"80%"} />
                  </>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="right-col">
                {product_data?.product_image ? (
                  <img
                    src={`${ImageURL}product/${product_data?.product_image}`}
                    alt="img"
                    className="img-fluid"
                  />
                ) : (
                  <TextLoader height={400} width={"100%"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default DetailWrap;
