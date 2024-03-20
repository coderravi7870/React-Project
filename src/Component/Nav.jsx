import React from "react";

const Nav = ({ setItem, selectItem }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className={`nav-link ${
                  (selectItem === "About" || selectItem === "Contact") &&
                  "active"
                }`}
                aria-current="page"
                href="#"
                onClick={() => setItem("Home")}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  (selectItem === "Home" || selectItem === "Contact") &&
                  "active"
                }`}
                aria-current="page"
                href="#"
                onClick={() => setItem("About")}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  (selectItem === "About" || selectItem === "Home") && "active"
                }`}
                aria-current="page"
                href="#"
                onClick={() => setItem("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button type="button" className="btn btn-info info">
            Info
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
