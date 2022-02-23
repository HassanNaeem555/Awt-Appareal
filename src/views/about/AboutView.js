import React, { useLayoutEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CommonBanner from "../../components/commonBanner";
import Subscribe from "../../components/home/subscribe";
import { getApi } from "../../utils/apiFunctions";
import { about_us } from "../../utils/api";
import { ImageURL } from "../../utils/custom";
import ImageLoader from "./imageLoader";
import TextLoader from "../../components/textLoader";

const About = () => {
  const [aboutContent, setAboutContent] = useState({});
  const [aboutContentVideo, setAboutContentVideo] = useState(false);
  const getAboutContent = async () => {
    const { data } = await getApi(about_us);
    if (data) {
      setAboutContent(data);
    }
  };
  const toggleAboutVideoModal = () => {
    setAboutContentVideo(!aboutContentVideo);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    getAboutContent();
  }, []);
  return (
    <>
      <CommonBanner img={"about-sec1"} name={"About Us"} />

      <section className="about-sec2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="aboutSec-content">
                {aboutContent?.main_heading ? (
                  <p className="black-heading mb-3">
                    {aboutContent?.main_heading}
                  </p>
                ) : (
                  <TextLoader height={20} />
                )}
                {aboutContent?.main_description ? (
                  <p className="paragraph">{aboutContent?.main_description}</p>
                ) : (
                  <>
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                  </>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="aboutSec2-image">
                {aboutContent?.main_image ? (
                  <img
                    src={`${ImageURL}about/${aboutContent?.main_image}`}
                    alt="img"
                    className="img-fluid"
                  />
                ) : (
                  <ImageLoader height={580} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec3">
        <div className="container">
          {aboutContent?.thumbnail ? (
            <div
              className="about-videoBox"
              style={{
                background: `url(${ImageURL}about/${aboutContent?.thumbnail}) no-repeat center center`,
              }}
              onClick={() => {
                aboutContent?.thumbnail_url && toggleAboutVideoModal();
              }}
            >
              <span>
                <i className="fa fa-play"></i>
              </span>
            </div>
          ) : (
            <ImageLoader height={530} />
          )}
        </div>
      </section>

      <section className="about-sec4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec4-image">
                {aboutContent?.second_image ? (
                  <img
                    src={`${ImageURL}about/${aboutContent?.second_image}`}
                    alt="img"
                    className="img-fluid"
                  />
                ) : (
                  <ImageLoader height={320} />
                )}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec4-contentWrap">
                <div className="aboutSec-content">
                  {aboutContent?.second_heading ? (
                    <p className="black-heading mb-3">
                      {aboutContent?.second_heading}
                    </p>
                  ) : (
                    <TextLoader height={20} />
                  )}
                  {aboutContent?.second_description ? (
                    <p className="paragraph">
                      {aboutContent?.second_description}
                    </p>
                  ) : (
                    <>
                      <TextLoader height={20} />
                      <TextLoader height={20} />
                      <TextLoader height={20} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-4">
              <div className="aboutSec-content">
                {aboutContent?.third_heading ? (
                  <p className="black-heading mb-3">
                    {aboutContent?.third_heading}
                  </p>
                ) : (
                  <TextLoader height={20} />
                )}
                {aboutContent?.third_description ? (
                  <p className="paragraph">{aboutContent?.third_description}</p>
                ) : (
                  <>
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                  </>
                )}
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8">
              <div className="aboutSec5-image">
                {aboutContent?.third_image ? (
                  <img
                    src={`${ImageURL}about/${aboutContent?.third_image}`}
                    alt="img"
                    className="img-fluid"
                  />
                ) : (
                  <ImageLoader height={360} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec2-image">
                {aboutContent?.fourth_image ? (
                  <img
                    src={`${ImageURL}about/${aboutContent?.fourth_image}`}
                    alt="img"
                    className="img-fluid"
                  />
                ) : (
                  <ImageLoader height={580} />
                )}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="aboutSec-content">
                {aboutContent?.fourth_heading ? (
                  <p className="black-heading">
                    {aboutContent?.fourth_heading}
                  </p>
                ) : (
                  <>
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                    <TextLoader height={20} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />

      <Modal
        className="fade login-signup-modal user-modals about-video-modal"
        centered={true}
        onHide={toggleAboutVideoModal}
        show={aboutContentVideo}
      >
        <Modal.Header>
          <button className="close" onClick={toggleAboutVideoModal}>
            <span>&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={aboutContent?.thumbnail_url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            style={{ borderRadius: 15 }}
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default About;
