import React from "react";
import { Accordion, useAccordionButton } from "react-bootstrap";

const Filters = ({
  categories,
  color,
  variants,
  onSubCategoryChange,
  onCategoryChange,
  onColorChange,
  onVariantChange,
  filterQuery,
  isFiltering,
}) => {
  const ParentCategoryToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );
    return (
      <p
        className="filter-title cursor-pointer mb-3"
        onClick={decoratedOnClick}
      >
        {children} <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  const SubCategoryToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <p className="filter-item cursor-pointer" onClick={decoratedOnClick}>
        {children} <i className="fa fa-chevron-down"></i>
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
      console.log("totally custom!", eventKey)
    );

    return (
      <p className="filter-title cursor-pointer" onClick={decoratedOnClick}>
        Size's <i className="fa fa-chevron-down"></i>
      </p>
    );
  };
  const checkFilter = (e) => {
    if (isFiltering) return null;
    else return filterQuery(1);
  };
  return (
    <aside className="filter-aside">
      {categories !== null ? (
        <div className="filter-box">
          <Accordion>
            <ParentCategoryToggle eventKey={categories?.id}>
              {categories?.category_name}
            </ParentCategoryToggle>
            <Accordion.Collapse eventKey={categories?.id}>
              <div className="filter-items">
                <ul>
                  {categories?.sub_category &&
                  categories?.sub_category.length > 0 ? (
                    <Accordion>
                      {categories?.sub_category.map((sub_cat, index) => {
                        return (
                          <React.Fragment key={index}>
                            <SubCategoryToggle eventKey={sub_cat?.id}>
                              {sub_cat?.sub_category}
                            </SubCategoryToggle>
                            <Accordion.Collapse eventKey={sub_cat?.id}>
                              <ul className="dropdownTwo">
                                {sub_cat?.attributes.length > 0 &&
                                  sub_cat?.attributes.map((product, index) => {
                                    return (
                                      <li key={index}>
                                        <div className="productVariation">
                                          <input
                                            type="checkbox"
                                            id={product?.id}
                                            name={product?.attribute_name}
                                            value={product?.attribute_name}
                                            onChange={(e) =>
                                              onSubCategoryChange(
                                                e,
                                                product?.id
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={product?.id}
                                            className="filter-item"
                                          >
                                            {product?.attribute_name}
                                          </label>
                                        </div>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </Accordion.Collapse>
                          </React.Fragment>
                        );
                      })}
                    </Accordion>
                  ) : (
                    <ul className="dropdownTwo">
                      {categories?.attributes.map((name, index) => {
                        return (
                          <li key={index}>
                            <div className="productVariation">
                              <input
                                type="checkbox"
                                id={name?.id}
                                name={name?.attribute_name}
                                value={name?.attribute_name}
                                onChange={(e) => onCategoryChange(e, name?.id)}
                              />
                              <label htmlFor={name?.id} className="filter-item">
                                {name?.attribute_name}
                              </label>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </ul>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
      ) : null}
      {color.length > 0 ? (
        <div className="filter-box">
          <Accordion>
            <ColourToggle eventKey="1" />
            <Accordion.Collapse eventKey="1">
              <div className="filter-items">
                <ul className="dropdownTwo">
                  {color.map((color, index) => {
                    return (
                      <li key={index}>
                        <div className="productVariation">
                          <input
                            type="checkbox"
                            id={color?.id}
                            name={color?.color_name}
                            value={color?.color_name}
                            onChange={(e) => onColorChange(e, color?.id)}
                          />
                          <label htmlFor={color?.id} className="filter-item">
                            {color?.color_name}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
      ) : null}
      {variants.length > 0 ? (
        <div className="filter-box">
          <Accordion>
            <SizeToggle eventKey="2" />
            <Accordion.Collapse eventKey="2">
              <div className="filter-items">
                <ul>
                  {variants.map((variant, index) => {
                    return (
                      <li key={index}>
                        <div className="productSize">
                          <input
                            type="checkbox"
                            id={variant?.id}
                            name={variant?.verient_name}
                            value={variant?.verient_name}
                            onChange={(e) => onVariantChange(e, variant?.id)}
                          />
                          <label htmlFor={variant?.id}>
                            {variant?.verient_name}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Accordion.Collapse>
          </Accordion>
        </div>
      ) : null}
      <button className="cta-btn w-100" onClick={checkFilter}>
        Filter
      </button>
    </aside>
  );
};

export default Filters;
