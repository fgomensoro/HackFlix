import { FaSearch } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light fixed-top navbarFlix">
      <div className="container-fluid">
        <div className="row menu">
          <button
            className="navbar-toggle popcorn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          ></button>
          <div className="textMenu">Menu</div>
        </div>
        <Link className="white logo" to="/">
          <FaCaretSquareRight className="logoIcon" />
          <h1 className="logoTitleA"> Hack </h1>
          <h1 className="logoTitleB"> F </h1>
          <h1 className="logoTitleC"> lix </h1>
        </Link>
        <div className="row searchBar">
          <div className="search"></div>
          <div className="col mx-5">
            <div className="btn-group dropstart">
              <Link
                className="white dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaSearch className="white searchSize" />
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item dropItemNav font2"
                    to="/search"
                  >
                    Search by Rating
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item font2" to="/search_by_name">
                    Search by Movie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* TOGGLER NAVBAR */}

        <div
          className="offcanvas offcanvas-start text-bg-dark canvas"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="menuBar">
            <div className="offcanvas-header red">
              <h5
                className="offcanvas-title font3"
                id="offcanvasDarkNavbarLabel"
              >
                MENU
              </h5>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active white font2"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item nav-item-contact">
                  <Link
                    className="nav-link white mt-3 align font2"
                    to="/search_by_name"
                  >
                    Search by Movie
                  </Link>
                </li>
                <li className="nav-item nav-item-contact">
                  <Link
                    className="nav-link white mt-3 align font2"
                    to="/search"
                  >
                    Search by Rating
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link white mt-3 align2 font2"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="white logo logo2">
              <FaCaretSquareRight className="logoIcon" />
              <h1 className="logoTitleA"> Hack </h1>
              <h1 className="logoTitleB"> F </h1>
              <h1 className="logoTitleC"> lix </h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
