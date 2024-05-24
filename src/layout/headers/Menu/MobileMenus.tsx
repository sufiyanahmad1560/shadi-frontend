import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTES, USER_ROLE } from "../../../utils/constant";

import { useAuth } from "../../../context/AuthContext";
import { DoctorCardData } from "../Card/DoctorCardData";
import MenuData from "./MenuData";

const doctorCardData = DoctorCardData;

const MobileMenus = ({ isOpenMenu, setIsOpenMenu }: any) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const knowMoreBtnClick = (type: string) => {
    // ref1.current?.classList.add("submenu-dr-01")
    if (type === APP_ROUTES.DR_NAMRATA) {
      navigate(APP_ROUTES.DR_NAMRATA)
    } else if (type === APP_ROUTES.DR_ARVIND) {
      navigate(APP_ROUTES.DR_ARVIND)

    }
  }

  return (
    <>
      <div className={`fade offcanvas-backdrop ${isOpenMenu ? "show" : ""}`} onClick={() => setIsOpenMenu(false)}></div>
      <div className={`side__bar offcanvas offcanvas-end ${isOpenMenu ? "show" : ""}`}>
        <div className="offcanvas-header">
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsOpenMenu(false)}></button>
        </div>
        <div className="offcanvas-body">
          <div className="accordion accordion-flush shheader__accordion" id="accordionFlushExample">

            {MenuData.map((item, i) =>


              <div key={i} className="accordion-item sh-accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button sh-accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`flush-collapse${i}`}>
                    {item.title.replace("+", "")}
                  </button>
                </h2>
                <div id={`flush-collapse${i}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body accordion-collapse-bg-gray2">
                    <div className="accordion accordion-flush" id="accordionFlushInner">

                      {item.menus?.map((menu, index) =>
                        <div key={index}>
                          {menu.heading &&
                            <div className="accordion-item sh-accordion-item-inner">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-inner${menu.heading.split(' ')[0]}${index}`} aria-expanded="false" aria-controls={`flush-collapse-inner${menu.heading.split(' ')[0]}${index}`}>
                                  {menu.heading}
                                </button>
                              </h2>
                              <div id={`flush-collapse-inner${menu.heading.split(' ')[0]}${index}`} className="accordion-collapse accordion-collapse-bg-gray collapse " data-bs-parent="#accordionFlushInner">

                                <div className="accordion-body">

                                  <ul className="">
                                    {menu.sub_menus?.map((submenu, index) =>
                                      <li key={index}>
                                        {item.title.replace(" +", "") === "Doctors" ?
                                          <div className="row shheader__doctor-card" >
                                            <div className="col-12">
                                              <div className="shheader__doctor-icon text-center mb-10">
                                                <img src={require(`../../../assets/img${submenu.imgUrl}`)} height={100} width={100} alt={submenu.title} />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              {submenu.title.split(' ')[0].toLowerCase() === 'namrata' ?
                                                <>
                                                  <h5 className="text-center qualification">{doctorCardData.namrata.qualification}</h5>
                                                  <h6 className="text-center green-color designation">{doctorCardData.namrata.position}</h6>
                                                  <p className="bio">{doctorCardData.namrata.bio}</p>
                                                </>
                                                :
                                                <>
                                                  <h5 className="text-center qualification">{doctorCardData.arvind.qualification}</h5>
                                                  <h6 className="text-center green-color designation">{doctorCardData.arvind.position}</h6>
                                                  <p className="bio">{doctorCardData.arvind.bio}</p>
                                                </>}
                                              <div className="text-end">
                                                <button onClick={() => knowMoreBtnClick(submenu.link)} className="primary_btn submenu-dr-btn  mb-10">Read More</button>
                                              </div>
                                            </div>
                                          </div>
                                          :
                                          <Link to={submenu.link}>{submenu.title}</Link>
                                        }
                                      </li>)}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          }
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>



            )}
          </div>


          <li className="sidebar_sub_menu-ddnone">

            <Link to={APP_ROUTES.APPOINTMENT}><i className="fa fa-calendar" style={{ marginRight: "16px" }} ></i>Book Appointment</Link>

          </li>
          <li className="sidebar_sub_menu-ddnone">
            {user && user?.name
              ? <Link to=""> <i className="fa fa-user" style={{ marginRight: "16px" }} ></i>{user?.name}</Link>
              : <Link to={APP_ROUTES.LOGIN}><i className="fa fa-sign-in" style={{ marginRight: "16px" }} ></i>Login</Link>
            }
          </li>
          {!user &&
            <li className="sidebar_sub_menu-ddnone">
              <Link to={APP_ROUTES.REGISTER}><i className="fa fa-book" style={{ marginRight: "16px" }}></i>Register</Link>
            </li>
          }
          {user && user?.role === USER_ROLE.DOCTOR &&
            <li className="sidebar_sub_menu-ddnone">
              <Link to={APP_ROUTES.APPOINTMENT_LIST}>
                <i className="fa fa-list" style={{ marginRight: "16px" }}></i>Your Patients</Link>
            </li>
          }
          {user && <li className="sidebar_sub_menu-ddnone">
            <Link to={APP_ROUTES.HOME} onClick={() => logout()}><i className="fa fa-sign-out" style={{ marginRight: "16px" }}></i>Logout</Link>
          </li>}
        </div>
      </div>

    </>
  );
};

export default MobileMenus;
