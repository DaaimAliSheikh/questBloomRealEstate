import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={`header-nav nav-homepage-style at-home2  main-menu ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
        style={{
          zIndex: 20,
        }}
      >
        <nav className="posr">
          <div className="container maxw1600 posr">
            <div className="row align-items-center justify-content-between ">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" to="/">
                      <img
                        style={{ height: "50px" }}
                        src="/images/Questrealstatewhite.svg"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" to="/">
                      <img
                        style={{ height: "50px" }}
                        src="/images/QMC-logo.webp"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <a
                    className="login-info d-flex align-items-center me-3"
                    href="tel:+9710564065672"
                  >
                    <i className="far fa-phone fz16 me-2"></i>{" "}
                    <span className="d-none d-xl-block">
                      +971 (56) 406 5672
                    </span>
                  </a>
                  <a
                    href="#"
                    className="login-info d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#loginSignupModal"
                    role="button"
                  >
                    {/* <i className="far fa-user-circle fz16 me-2" />{" "} */}
                    {/* <span className="d-none d-xl-block">Login / Register</span> */}
                  </a>
                  {/* <Link
                    className="ud-btn add-property menu-btn bdrs60 mx-2 mx-xl-4"
                    to="/dashboard-add-property"
                  >
                    Add Property
                    <i className="fal fa-arrow-right-long" />
                  </Link> */}
                  {/* <a
                    className="sidemenu-btn m20 filter-btn-right"
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#SidebarPanel"
                    aria-controls="SidebarPanelLabel"
                  >
                    <img
                      className="img-1"
                      src="/images/icon/nav-icon-white.svg"
                      alt="humberger menu"
                    />

                    <img
                      className="img-2"
                      src="/images/icon/nav-icon-dark.svg"
                      alt="humberger menu"
                    />
                  </a> */}
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}
      <div className="signup-modal">
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            {/* <LoginSignupModal /> */}
          </div>
        </div>
      </div>
      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}
      {/* <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div> */}
      {/* Sidebar Panel End */}
    </>
  );
};

export default Header;
