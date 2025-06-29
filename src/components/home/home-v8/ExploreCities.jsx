import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ExploreCities = () => {
  const cities = [
    {
      id: 1,
      name: "Los Angeles",
      image: "/images/listings/city-listing-1.jpg",
      number: 12,
    },
    {
      id: 2,
      name: "Miami",
      image: "/images/listings/city-listing-1.jpg",
      number: 8,
    },
    {
      id: 3,
      name: "New York",
      image: "/images/listings/city-listing-1.jpg",
      number: 15,
    },
    {
      id: 4,
      name: "Chicago",
      image: "/images/listings/city-listing-1.jpg",
      number: 10,
    },
    {
      id: 5,
      name: "Los Angeles",
      image: "/images/listings/city-listing-1.jpg",
      number: 12,
    },
    {
      id: 6,
      name: "Miami",
      image: "/images/listings/city-listing-1.jpg",
      number: 8,
    },
    // Add more cities if needed
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cities_next__active",
          prevEl: ".cities_prev__active",
        }}
        pagination={{
          el: ".cities_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 50000, // Set the desired delay for autoplay
          disableOnInteraction: false, // Keep autoplaying even when user interacts with the swiper
        }}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id}>
            <div className="item">
              <Link to="/map-v4">
                <div className="feature-style2 mb30">
                  <div className="feature-img">
                    <img
                      className="w-100 h-100 cover"
                      src={city.image}
                      alt="city listings"
                    />
                  </div>
                  <div className="feature-content pt20">
                    <h6 className="title mb-1">{city.name}</h6>
                    <p className="text fz15">{city.number} Properties</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExploreCities;
