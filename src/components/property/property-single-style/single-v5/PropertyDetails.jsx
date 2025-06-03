import React from "react";

const PropertyDetails = ({ property }) => {
  // Helper function to get comma-separated bedroom list
  const getBedroomList = () => {
    if (!property?.unit_blocks || property.unit_blocks.length === 0) {
      return "N/A";
    }

    const bedrooms = [];
    property.unit_blocks.forEach((block) => {
      const name = block?.name?.toLowerCase() || "";

      // Skip studios
      if (name.includes("studio")) return;

      if (name.includes("1,5") || name.includes("1.5")) {
        bedrooms.push(1.5);
      } else if (name.includes("2,5") || name.includes("2.5")) {
        bedrooms.push(2.5);
      } else {
        const match = name.match(/(\d+)\s*bedroom/);
        if (match) {
          bedrooms.push(parseFloat(match[1]));
        }
      }
    });

    if (bedrooms.length === 0) return "N/A";

    const uniqueBedrooms = [...new Set(bedrooms)].sort((a, b) => a - b);
    const min = uniqueBedrooms[0];
    const max = uniqueBedrooms[uniqueBedrooms.length - 1];

    // Format as "1 BR - 2.5 BR" or just "2 BR"
    return min === max ? `${min} BR` : `${min} BR - ${max} BR`;
  };

  // Helper function to get completion year
  const getYearBuilt = () => {
    if (!property?.completion_datetime) return "Under Construction";
    const year = new Date(property.completion_datetime).getFullYear();
    const currentYear = new Date().getFullYear();
    return year > currentYear ? `Est. ${year}` : year.toString();
  };
  // Helper function to get area range in sqft
  const getAreaRange = () => {
    if (!property?.unit_blocks || property.unit_blocks.length === 0) {
      return "N/A";
    }

    const areas = property.unit_blocks
      .filter(
        (block) =>
          block?.units_area_from_m2 && parseFloat(block.units_area_from_m2) > 0
      )
      .map((block) =>
        Math.round(parseFloat(block.units_area_from_m2) * 10.764)
      ); // Convert m2 to sqft

    if (areas.length === 0) return "N/A";

    const min = Math.min(...areas);
    const max = Math.max(...areas);

    if (min === max) {
      return `${min.toLocaleString()} sqft`;
    } else {
      return `${min.toLocaleString()} - ${max.toLocaleString()} sqft`;
    }
  };

  // Helper function to get all unique property types
  const getPropertyType = () => {
    if (!property?.unit_blocks || property.unit_blocks.length === 0) {
      return "Residential";
    }

    const uniqueTypes = [
      ...new Set(
        property.unit_blocks
          .map((block) => block?.normalized_type)
          .filter((type) => type) // Remove null/undefined values
      ),
    ];

    return uniqueTypes.length > 0 ? uniqueTypes.join(", ") : "Residential";
  };

  // Helper function to get price range
  const getPriceRange = () => {
    if (!property?.unit_blocks || property.unit_blocks.length === 0) {
      return "N/A";
    }

    const prices = property.unit_blocks
      .filter(
        (block) =>
          block?.units_price_from_aed &&
          parseFloat(block.units_price_from_aed) > 0
      )
      .map((block) => parseFloat(block.units_price_from_aed));

    if (prices.length === 0) return "N/A";

    const min = Math.min(...prices);
    const max = Math.max(...prices);

    const formatPrice = (price) => {
      return `${price.toLocaleString()}`;
    };

    if (min === max) {
      return formatPrice(min);
    } else {
      return `${formatPrice(min)} - ${formatPrice(max)}`;
    }
  };

  const columns = [
    [
      {
        label: "Property ID",
        value: property?.id || "N/A",
      },
      {
        label: "Price",
        value: "AED " + getPriceRange(),
      },
      {
        label: "Property Size",
        value: getAreaRange(),
      },
    ],
    [
      {
        label: "Bedrooms",
        value: getBedroomList(),
      },
      {
        label: "Year Built",
        value: getYearBuilt(),
      },
      {
        label: "Property Type",
        value: getPropertyType(),
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="col-md-6 col-xl-6">
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
