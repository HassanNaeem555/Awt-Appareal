import React from "react";
import { Accordion, useAccordionButton } from "react-bootstrap";

const Filters = ({ name }) => {
  const ParentCategoryToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <p
        className="filter-title cursor-pointer mb-3"
        onClick={decoratedOnClick}
      >
        {name()} <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  const MenCategoryToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <p className="filter-item cursor-pointer" onClick={decoratedOnClick}>
        Men <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  const WomenCategoryToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <p className="filter-item cursor-pointer" onClick={decoratedOnClick}>
        Women <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  const ColourToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <p className="filter-title cursor-pointer" onClick={decoratedOnClick}>
        Colours <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  const SizeToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <p className="filter-title cursor-pointer" onClick={decoratedOnClick}>
        Size's <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  const RatingToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <p className="filter-title cursor-pointer" onClick={decoratedOnClick}>
        Rating's <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  return (
    <aside className="filter-aside">
      <div className="filter-box">
        <Accordion>
          <ParentCategoryToggle eventKey="0" />
          <Accordion.Collapse eventKey="0">
            <div className="filter-items">
              <ul>
                {name() === "Mens" ? (
                  <ul className="dropdownTwo">
                    <li>
                      <div className="productVariation">
                        <input
                          type="checkbox"
                          id="tshirt"
                          name="tshirt"
                          value="tshirt"
                        />
                        <label htmlFor="tshirt" className="filter-item">
                          T- Shirts
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="productVariation">
                        <input
                          type="checkbox"
                          id="Hoodies"
                          name="Hoodies"
                          value="Hoodies"
                        />
                        <label htmlFor="Hoodies" className="filter-item">
                          Hoodies
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="productVariation">
                        <input
                          type="checkbox"
                          id="Shorts"
                          name="Shorts"
                          value="Shorts"
                        />
                        <label htmlFor="Shorts" className="filter-item">
                          Shorts
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="productVariation">
                        <input
                          type="checkbox"
                          id="Hats"
                          name="Hats"
                          value="Hats"
                        />
                        <label htmlFor="Hats" className="filter-item">
                          Hats
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="productVariation">
                        <input
                          type="checkbox"
                          id="Bags"
                          name="Bags"
                          value="Bags"
                        />
                        <label htmlFor="Bags" className="filter-item">
                          Bags
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="productVariation">
                        <input
                          type="checkbox"
                          id="Shoes"
                          name="Shoes"
                          value="Shoes"
                        />
                        <label htmlFor="Shoes" className="filter-item">
                          Shoes
                        </label>
                      </div>
                    </li>
                  </ul>
                ) : name() === "Womens" ? (
                  <ul className="dropdownTwo">
                    <li>
                      <span className="filter-item">T- Shirts</span>
                    </li>
                    <li>
                      <span className="filter-item">Hoodies</span>
                    </li>
                    <li>
                      <span className="filter-item">Shorts</span>
                    </li>
                    <li>
                      <span className="filter-item">Hats</span>
                    </li>
                    <li>
                      <span className="filter-item">Bags</span>
                    </li>
                    <li>
                      <span className="filter-item">Shoes</span>
                    </li>
                  </ul>
                ) : (
                  <>
                    <Accordion>
                      <MenCategoryToggle eventKey="4" />
                      <Accordion.Collapse eventKey="4">
                        <ul className="dropdownTwo">
                          <li>
                            <span className="filter-item">T- Shirts</span>
                          </li>
                          <li>
                            <span className="filter-item">Hoodies</span>
                          </li>
                          <li>
                            <span className="filter-item">Shorts</span>
                          </li>
                          <li>
                            <span className="filter-item">Hats</span>
                          </li>
                          <li>
                            <span className="filter-item">Bags</span>
                          </li>
                          <li>
                            <span className="filter-item">Shoes</span>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion>
                    <Accordion>
                      <WomenCategoryToggle eventKey="5" />
                      <Accordion.Collapse eventKey="5">
                        <ul className="dropdownTwo">
                          <li>
                            <span className="filter-item">T- Shirts</span>
                          </li>
                          <li>
                            <span className="filter-item">Hoodies</span>
                          </li>
                          <li>
                            <span className="filter-item">Shorts</span>
                          </li>
                          <li>
                            <span className="filter-item">Hats</span>
                          </li>
                          <li>
                            <span className="filter-item">Bags</span>
                          </li>
                          <li>
                            <span className="filter-item">Shoes</span>
                          </li>
                        </ul>
                      </Accordion.Collapse>
                    </Accordion>
                  </>
                )}
              </ul>
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
      <div className="filter-box">
        <Accordion>
          <ColourToggle eventKey="1" />
          <Accordion.Collapse eventKey="1">
            <div className="filter-items">
              <div className="colours-item">
                <label htmlFor="color1" className="color1 color-picker">
                  <input type="radio" id="color1" name="color" value="color1" />
                </label>
                <label htmlFor="color2" className="color2 color-picker">
                  <input type="radio" id="color2" name="color" value="color2" />
                </label>
                <label htmlFor="color3" className="color3 color-picker">
                  <input type="radio" id="color3" name="color" value="color3" />
                </label>
                <label htmlFor="color4" className="color4 color-picker">
                  <input type="radio" id="color4" name="color" value="color4" />
                </label>
                <label htmlFor="color5" className="color5 color-picker">
                  <input type="radio" id="color5" name="color" value="color5" />
                </label>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
      <div className="filter-box">
        <Accordion>
          <SizeToggle eventKey="2" />
          <Accordion.Collapse eventKey="2">
            <div className="filter-items">
              <ul>
                <li>
                  <div className="productSize">
                    <input
                      type="checkbox"
                      id="small"
                      name="small"
                      value="small"
                    />
                    <label htmlFor="small">Small</label>
                  </div>
                </li>
                <li>
                  <div className="productSize">
                    <input
                      type="checkbox"
                      id="medium"
                      name="medium"
                      value="medium"
                    />
                    <label htmlFor="medium">Medium</label>
                  </div>
                </li>
                <li>
                  <div className="productSize">
                    <input
                      type="checkbox"
                      id="large"
                      name="large"
                      value="large"
                    />
                    <label htmlFor="large">Large</label>
                  </div>
                </li>
                <li>
                  <div className="productSize">
                    <input type="checkbox" id="xl" name="xl" value="xl" />
                    <label htmlFor="xl">XL Large</label>
                  </div>
                </li>
                <li>
                  <div className="productSize">
                    <input type="checkbox" id="xxl" name="xxl" value="xxl" />
                    <label htmlFor="xxl">XXL Large</label>
                  </div>
                </li>
              </ul>
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
      <div className="filter-box">
        <Accordion>
          <RatingToggle eventKey="3" />
          <Accordion.Collapse eventKey="3">
            <div className="filter-items">
              <div className="ratingBox">
                <div className="ratingStars">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="ratingCount">
                  <span>(1)</span>
                </div>
              </div>
              <div className="ratingBox">
                <div className="ratingStars">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="ratingCount">
                  <span>(2)</span>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </aside>
  );
};

export default Filters;
