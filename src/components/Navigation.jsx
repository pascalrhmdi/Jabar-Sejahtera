import { Link, NavLink, useLocation } from "react-router-dom";
import { logoJabarSejahtera } from "../assets/logos";

export default function Navigation() {

  const match = useLocation();
  const isLoggedIn = true;

  const isActiveNavbar = ({ isActive }) => "nav-link " + (isActive ? "active" : "")

  const isActiveNavbarDropdown = ({ isActive }) => "dropdown-item " + (isActive ? "active" : "")

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm bg-white">
      <div className="container-xl">
        <NavLink className="navbar-brand" to="/">
          <img src={logoJabarSejahtera} alt="LogoJabarSejahtera" height="50" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0 align-items-center ">
            <li className="nav-item mt-2 mt-lg-0 mb-lg-0">
              <NavLink
                className={isActiveNavbar}
                to="/"
              >
                Beranda
              </NavLink>
            </li>
            <li className="nav-item mt-2 mt-lg-0 mb-lg-0">
              <NavLink
                className={isActiveNavbar}
                to="donasi"
              >
                Donasi
              </NavLink>
            </li>
            <li className="nav-item dropdown mt-2 mt-lg-0 mb-lg-0">
              <button
                className={"btn nav-link dropdown-toggle" + (match.pathname.includes("layanan") ? " active" : "")}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                Layanan
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="layanan/hitung-zakat">
                    Hitung Zakat
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="layanan/laporan">
                    Laporan Penyaluran Dana
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item mt-2 mt-lg-0 mb-lg-0">
              <NavLink
                className={isActiveNavbar}
                to="event"
              >
                Event
              </NavLink>
            </li>
            <li className="nav-item mt-2 mt-lg-0 mb-lg-0">
              <NavLink
                className={isActiveNavbar}
                to="tentang-kami"
              >
                Tentang Kami
              </NavLink>
            </li>
          </ul>
          {
            isLoggedIn ?
              (
                <div className="d-flex align-items-center">
                  <i className="bi bi-person-circle fs-3"></i>
                  <div className="dropdown open">
                    <button
                      className="btn  dropdown-toggle"
                      type="button"
                      id="triggerAcccount"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Muhammad Pascal Rahmadi
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="triggerAcccount">
                      <Link className="dropdown-item" to="akun/edit">
                      <i className="bi bi-person-circle me-2"></i>
                        Edit Akun
                      </Link>
                      <Link className="dropdown-item" to="akun/riwayat">
                      <i className="bi bi-clock-history me-2"></i>
                        Riwayat Donasi
                      </Link>
                      <hr className="dropdown-divider" />
                      <Link
                        className="dropdown-item text-danger"
                        to=""
                      >
                        <i className="bi bi-door-open-fill text-danger me-2"></i>
                        Keluar
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="login"><button className="btn btn-link text-dark text-decoration-none me-1">Masuk</button></Link>
                  <Link to="register"><button className="btn btn-primary">Daftar</button></Link>
                </div>
              )
          }
        </div>
      </div>
    </nav>
  );
}
