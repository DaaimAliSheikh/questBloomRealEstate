import React from "react";
import ListingStatus from "../../sidebar/ListingStatus";
// import PropertyType from "../../sidebar/PropertyType";
// import PriceRange from "../../sidebar/PriceRange";
// import Bedroom from "../../sidebar/Bedroom";
// import Bathroom from "../../sidebar/Bathroom";
import Select from "react-select";

const customStyles = {
  option: (styles, { isFocused, isSelected, isHovered }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#797631"
        : isHovered
        ? "#DDE5C2"
        : isFocused
        ? "#DDE5C2"
        : undefined,
    };
  },
};
// const locationOptions = [
//   { value: "All Cities", label: "All Cities" },
//   { value: "California", label: "California" },
//   { value: "Los Angeles", label: "Los Angeles" },
//   { value: "New Jersey", label: "New Jersey" },
//   { value: "New York", label: "New York" },
//   { value: "San Diego", label: "San Diego" },
//   { value: "San Francisco", label: "San Francisco" },
//   { value: "Texas", label: "Texas" },
// ];

const TopFilterBar = ({
  filterFunctions,
  setDataFetched,
  setCurrentSortingOption,
  colstyle,
  setColstyle,
  locationOptions = [],
  saleStatuses,
}) => {
  return (
    <>
      <div className="col-xl-9 d-none d-lg-block">
        <div className="dropdown-lists">
          <ul className="p-0 text-center text-xl-start">
            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                For Sale <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                  <h6 className="list-title">Listing Status</h6>
                  <div className="radio-element">
                    <ListingStatus
                      setDataFetched={setDataFetched}
                      filterFunctions={filterFunctions}
                      saleStatuses={saleStatuses}
                    />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End li Listing Status */}

            {/* <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Property Type <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                  <h6 className="list-title">Property Type</h6>
                  <div className="checkbox-style1">
                    <PropertyType filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm dropdown-toggle"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li> */}
            {/* End li Property Type */}

            {/* <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Price <i className="fa fa-angle-down ms-2" />
              </button>

              <div className="dropdown-menu dd3">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                  <h6 className="list-title">Price Range</h6>
                  <div className="range-slider-style1">
                    <PriceRange filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn3"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li> */}
            {/* End li Price */}
            <li
              className="list-inline-item position-relative font-bold"
              style={{ width: "200px" }}
            >
              <Select
                defaultValue={locationOptions[0] || null}
                name="colors"
                styles={customStyles}
                options={locationOptions}
                className="select-custom filterSelect"
                classNamePrefix="select"
                value={{
                  value: filterFunctions?.location,
                  label: locationOptions.find(
                    (option) => option.value === filterFunctions?.location
                  )?.label || "All Locations",
                }}
                onChange={(e) => {
                  setDataFetched(false);
                  console.log(e.value)
                  filterFunctions?.handlelocation(e.value);
                }}
                required
              />
            </li>
            {/* <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Beds / Baths <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu dd4 pb20">
                <div className="widget-wrapper pl20 pr20">
                  <h6 className="list-title">Bedrooms</h6>
                  <div className="d-flex">
                    <Bedroom filterFunctions={filterFunctions}/>
                  </div>
                </div>

                <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                  <h6 className="list-title">Bathrooms</h6>
                  <div className="d-flex">
                    <Bathroom filterFunctions={filterFunctions}/>
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn4"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li> */}
            {/* End bed and bathroom check */}

            <li className="list-inline-item">
              <button
                type="button"
                className="open-btn mb15"
                data-bs-toggle="modal"
                data-bs-target="#advanceSeachModal"
              >
                <i className="flaticon-settings me-2" /> Advanced Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col-9 */}

      <div className="col-xl-3 mb-md-0 mb-4">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "60px" }}>Sort by</span>
            <select
              className="form-select"
              onChange={(e) =>
                setCurrentSortingOption &&
                setCurrentSortingOption(e.target.value)
              }
            >
              <option>Newest</option>
              <option>Price Low</option>
              <option>Price High</option>
            </select>
          </div>
          <div
            className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block  cursor ${
              !colstyle ? "menuActive" : "#"
            } `}
            onClick={() => setColstyle(false)}
          >
            Grid
          </div>
          <div
            className={`pl15 d-none d-md-block  cursor ${
              colstyle ? "menuActive" : "#"
            }`}
            onClick={() => setColstyle(true)}
          >
            List
          </div>
        </div>
      </div>
      {/* End .col-3 */}
    </>
  );
};

export default TopFilterBar;
