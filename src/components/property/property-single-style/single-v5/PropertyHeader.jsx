import React from "react";

const PropertyHeader = ({ property }) => {
  // Helper function to format price
  const formatPrice = (price) => {
    if (!price) return "Ask for price";
    return `${Math.round(price).toLocaleString()}`;
  };

  // Helper function to get completion year
  const getCompletionYear = () => {
    if (!property?.completion_datetime) return null;
    return new Date(property?.completion_datetime).getFullYear();
  };

  // Helper function to calculate years until completion
  const getYearsUntilCompletion = () => {
    const completionYear = getCompletionYear();
    if (!completionYear) return null;
    const currentYear = new Date().getFullYear();
    const diff = completionYear - currentYear;
    return diff > 0
      ? `${diff} years to completion`
      : `Completed ${Math.abs(diff)} years ago`;
  };

  // Get price range for display
  const getPriceDisplay = () => {
    if (property?.unit_blocks && property?.unit_blocks.length > 0) {
      const prices = property?.unit_blocks
        .filter((block) => block.units_price_from_aed)
        .map((block) => block.units_price_from_aed);

      if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        if (minPrice === maxPrice) {
          return formatPrice(minPrice);
        } else {
          return `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
        }
      }
    }
    return "Ask for price";
  };

  // Get area range for price per sqft calculation
  const getAreaDisplay = () => {
    if (property?.unit_blocks && property?.unit_blocks.length > 0) {
      const areas = property?.unit_blocks
        .filter(
          (block) =>
            block.units_area_from_m2 && parseFloat(block.units_area_from_m2) > 0
        )
        .map((block) => parseFloat(block.units_area_from_m2));

      if (areas.length > 0) {
        const minArea = Math.min(...areas);
        // Convert m2 to sqft (1 m2 = 10.764 sqft)
        return Math.round(minArea * 10.764);
      }
    }
    return null;
  };

  return (
    <>
      <div className="col-lg-8 ">
        <div className="single-property-content mb30-md">
          <h2
            className="sp-lg-title"
            style={{
              textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
            }}
          >
            {property?.name || "Property Name"}
          </h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p
              className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm"
              style={{
                textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
              }}
            >
              {property?.area}, {property?.country}
            </p>
          </div>
          <div className="property-meta d-flex align-items-center">
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 bdrrn-sm"
              href="#"
              style={{
                textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
              }}
            >
              <i className="fas fa-circle fz10 pe-2" />
              {property?.sale_status}
            </a>
            {getYearsUntilCompletion() && (
              <a
                className="ff-heading bdrr1 fz15 pr10 ml10 ml0-sm bdrrn-sm"
                href="#"
                style={{
                  textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
                }}
              >
                <i className="far fa-clock pe-2" />
                {getYearsUntilCompletion()}
              </a>
            )}
            {getAreaDisplay() && (
              <a
                className="ff-heading ml10 ml0-sm fz15"
                href="#"
                style={{
                  textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
                }}
              >
                <i className="flaticon-fullscreen pe-2 align-text-top" />
                {getAreaDisplay()} sqft
              </a>
            )}
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
              <a
                className="icon mr10"
                href="#"
                style={{
                  textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
                }}
              >
                <span className="flaticon-like" />
              </a>
              <a
                className="icon mr10"
                href="#"
                style={{
                  textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
                }}
              >
                <span className="flaticon-new-tab" />
              </a>
              <a
                className="icon mr10"
                href="#"
                style={{
                  textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
                }}
              >
                <span className="flaticon-share-1" />
              </a>
              <a
                className="icon"
                href="#"
                style={{
                  textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
                }}
              >
                <span className="flaticon-printer" />
              </a>
            </div>
            <h3
              style={{
                textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
              }}
              className="price mb-0"
            >
              {getPriceDisplay() === "Ask for price"
                ? "Ask for price"
                : "AED " + getPriceDisplay()}
            </h3>
            {property?.unit_blocks && property?.unit_blocks.length > 0 && (
              <p
                className="text space fz15"
                style={{
                  textShadow: "0px 0px 7px rgba(0, 0, 0, 0.7)",
                }}
              >
                Starting from{" "}
                {formatPrice(
                  Math.min(
                    ...property?.unit_blocks
                      .filter((block) => block.units_price_from_aed)
                      .map((block) => block.units_price_from_aed)
                  ) / getAreaDisplay() || "Ask for price"
                ) === Infinity
                  ? ""
                  : formatPrice(
                      Math.min(
                        ...property?.unit_blocks
                          .filter((block) => block.units_price_from_aed)
                          .map((block) => block.units_price_from_aed)
                      ) / getAreaDisplay() || "Ask for price"
                    ) + " AED/sqft"}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
