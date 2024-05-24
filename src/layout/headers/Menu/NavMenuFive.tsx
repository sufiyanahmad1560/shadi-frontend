import { MouseEvent, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import FullscreenSearch from '../../../compoments/common/FullscreenSearch';
import { APP_ROUTES } from '../../../utils/constant';
import DoctorCard from "../Card/DoctorCard";
import { DoctorCardData } from "../Card/DoctorCardData";
import MenuData from "./MenuData";


const NavMenuFive = ({ videoHeader, home_4 }: any) => {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);

  const drLinkMouseOverHandler = (index: number) => {
    ref1.current?.classList.remove("submenu-dr-01")
    if (index === 0) {
      ref1.current?.classList.add("submenu-dr-01-show");
      ref2.current?.classList.remove("submenu-dr-02-show");
      ref3.current?.classList.remove("submenu-dr-03-show");
    } else if (index === 1) {
      ref1.current?.classList.remove("submenu-dr-01-show");
      ref2.current?.classList.add("submenu-dr-02-show");
      ref3.current?.classList.remove("submenu-dr-03-show");
    } else if (index === 2) {
      ref1.current?.classList.remove("submenu-dr-01-show");
      ref2.current?.classList.remove("submenu-dr-02-show");
      ref3.current?.classList.add("submenu-dr-03-show")

    }
  }

  const submenuMouseLeaveHandler = () => {
    ref1.current?.classList.remove("submenu-dr-01-show");
    ref2.current?.classList.remove("submenu-dr-02-show");
    ref3.current?.classList.remove("submenu-dr-03-show");
    ref1.current?.classList.add("submenu-dr-01");
  }

  const drLinkClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  }

  const knowMoreBtnClick = (type: string) => {
    // ref1.current?.classList.add("submenu-dr-01")
    if (type === APP_ROUTES.DR_NAMRATA) {
      navigate(APP_ROUTES.DR_NAMRATA);
    } else if (type === APP_ROUTES.DR_ARVIND) {
      navigate(APP_ROUTES.DR_ARVIND);
    } else if (type === APP_ROUTES.DR_DEEPMALA) {
      navigate(APP_ROUTES.DR_DEEPMALA);
    }
  }

  return (
    <>
      <ul>
        {MenuData.map((item, i) => (
          <li key={i}>
            {item.has_dropdown ?
              <Link to={item.link} className={`${videoHeader ? "header__menu-3 " : ""}`}>{item.title}</Link>
              : <Link to={item.link} className={`${videoHeader ? "header__menu-3 " : ""}`}>{item.title.replace("+", "")}</Link>
            }
            {item.has_dropdown &&
              <ul className="submenu" onMouseLeave={submenuMouseLeaveHandler}>
                <div className="container">
                  <div className="row">
                    {item.title !== 'Doctors +' && item.menus?.map((menu, index) =>
                      <div className="col" key={index}>
                        {menu.heading &&
                          <>
                            <h6 className="text-center heading">{menu.heading}</h6>
                            <ul className="text-center">
                              {menu.sub_menus?.map((submenu, index) =>
                                <li key={index} className="border-bottom submenu__link">
                                  <Link to={submenu.link}>{submenu.title}</Link>
                                </li>
                              )}
                            </ul>
                          </>
                        }
                      </div>
                    )}
                    {item.title === 'Doctors +' &&
                      <>
                        <div className="col" >
                          <ul>
                            {item.menus?.map((menu, index) =>
                              <li key={index} onMouseOver={() => drLinkMouseOverHandler(index)} className="border-bottom submenu__link ">
                                <Link onClick={(e) => drLinkClickHandler(e)} to="#">{menu.heading}</Link>
                              </li>)}
                          </ul>
                        </div>
                        <div className="col-9 submenu-dr-col">
                          <div ref={ref1} className="submenu-dr submenu-dr-01 ">
                            <DoctorCard data={DoctorCardData.namrata} knowMoreBtnHandler={knowMoreBtnClick} />
                          </div>
                          <div ref={ref2} className="submenu-dr  ">
                            <DoctorCard data={DoctorCardData.arvind} knowMoreBtnHandler={knowMoreBtnClick} />
                          </div>
                          <div ref={ref3} className="submenu-dr">
                            <DoctorCard data={DoctorCardData.deepmala} knowMoreBtnHandler={knowMoreBtnClick} />
                          </div>
                        </div>
                      </>

                    }
                  </div>
                </div>
              </ul>
            }
          </li>
        ))}

        {home_4 && <li><button style={{ marginLeft: "10px" }} className="nav-search-icon">
          <i className="fa fa-search" onClick={() => setOpenSearch(true)}></i></button>
        </li>
        }
      </ul>
      {openSearch && <FullscreenSearch openSearch={openSearch} setOpenSearch={setOpenSearch} />}
    </>
  );
};

export default NavMenuFive;

