import { useState } from "react";
import { Link } from "react-router-dom";
import UserImg from "../../assets/img/login/person.png";
import HeaderLogo from "../../assets/img/logo/logo-2.png";
import SocialLinks from "../../compoments/common/SocialLinks";
import { useAuth } from "../../context/AuthContext";
import UseSticky from "../../hooks/UseSticky";
import { APP_ROUTES, CONTACT, USER_ROLE } from "../../utils/constant";
import MobileMenus from "./Menu/MobileMenus";
import NavMenuFive from "./Menu/NavMenuFive";

const header_content = {
  phone: CONTACT.PHONE_STYLE1,
  email: CONTACT.EMAIL,
  btn_text: "Make Appointment",
}
const { phone, email, btn_text } = header_content

const HeaderFive = () => {
  const { user, logout } = useAuth();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const { sticky } = UseSticky();

  return (
    <>
      <header>
        <div className="top-bar d-none d-md-block">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                <div className="header-info">
                  <span><i className="fas fa-phone"></i>{phone}</span>
                  <span><i className="fas fa-envelope"></i>{email}</span>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-4">
                <div className="header-top-right-btn f-right">
                  <Link to={APP_ROUTES.APPOINTMENT} className="btn primary_btn">{btn_text}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`header-menu-area ${sticky ? "sticky_menu " : ""}`}>
          <div className="container menu_wrapper">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                <div className="logo logo-circle pos-rel">
                  <Link to={APP_ROUTES.HOME}>
                    <img src={HeaderLogo} alt="theme-pure" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                <div className="header-right f-right">
                  <div className="header-social-icons f-right d-none d-xl-block">
                    <ul>
                      <li><SocialLinks /> </li>
                    </ul>
                  </div>


                  <div className="header-lang  f-right pos-rel d-none d-lg-block">
                    <div className="header__menu f-right">
                      <ul>
                        {/* <li >
													<Link href="/" className="p-0">
														<div className="lang-icon">
															<i className="fa fa-bell" style={{ fontSize: "20px" }} ></i>
														</div>
													</Link>
												</li> */}
                        <li >
                          <Link to="/" className="p-0">
                            <div className="lang-icon">
                              <img src={UserImg} alt="theme-pure" />
                              {/* <span>EN<i className="fas fa-angle-down"></i></span> */}
                            </div>

                          </Link>
                          <ul className="submenu" style={{ width: "150px", marginTop: "20px" }}>
                            <li >
                              {user && user?.name ? <Link to="">
                                <i className="fa fa-user" style={{ marginRight: "8px" }} ></i>{user?.name}</Link>
                                : <Link to={APP_ROUTES.LOGIN}>
                                  <i className="fa fa-sign-in" style={{ marginRight: "8px" }} ></i>Login </Link>
                              }
                              {!user && <Link to={APP_ROUTES.REGISTER}>
                                <i className="fa fa-book" style={{ marginRight: "8px" }}></i>Register</Link>}
                              {user && user?.role === USER_ROLE.DOCTOR &&
                                <Link to={APP_ROUTES.APPOINTMENT_LIST}>
                                  <i className="fa fa-fa-user" style={{ marginRight: "8px" }}></i>Your Patients</Link>
                              }
                              {user && <Link to={APP_ROUTES.HOME} onClick={() => logout()}>
                                <i className="fa fa-sign-out" style={{ marginRight: "8px" }}></i>Logout</Link>
                              }

                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="header__menu header__menu-tab f-right">
                  <nav id="mobile-menu">
                    <NavMenuFive />
                  </nav>
                </div>
                <div className="side-menu-icon d-lg-none text-end">
                  <button className="side-toggle border-0 bg-transparent" onClick={() => setIsOpenMenu(true)}>
                    <i className="fas fa-bars "></i> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpenMenu && <MobileMenus isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />}
    </>
  );
};

export default HeaderFive;