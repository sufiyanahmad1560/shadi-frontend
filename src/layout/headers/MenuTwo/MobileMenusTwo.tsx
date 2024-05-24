import Collapsible from 'react-collapsible';
import { Link } from "react-router-dom";
import MenuData from "./MenuDataTwo";


const MobileMenusTwo = ({ isOpenMenu, setIsOpenMenu }: any) => {

  return (
    <>
      <div className={`fade offcanvas-backdrop ${isOpenMenu ? "show" : ""}`} onClick={() => setIsOpenMenu(false)}></div>
      <div className={`side__bar offcanvas offcanvas-end ${isOpenMenu ? "show" : ""}`}>
        <div className="offcanvas-header">
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsOpenMenu(false)}></button>
        </div>
        <div className="offcanvas-body">
          {MenuData.map((item, i) =>
            <Collapsible trigger={item.title.replace("+", "")} triggerTagName="div" key={i}
              triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
              <ul className="sidebar_sub_menu text-white mt-3">
                {item.sub_menus?.map((sub_menu, index) =>
                  <li key={index}>
                    <Link to={sub_menu.link}>{sub_menu.title}</Link>
                  </li>
                )}
              </ul>
            </Collapsible>
          )}
        </div>
      </div>

    </>
  );
};

export default MobileMenusTwo;
