import { useState } from "react";
import { Link } from "react-router-dom";
import FullscreenSearch from "../../../compoments/common/FullscreenSearch";
import MenuData from "./MenuDataTwo";

const NavMenuTwo = ({ home_4 }: any) => {
	const [openSearch, setOpenSearch] = useState<boolean>(false);
	return (
		<>

			<ul>
				<li >
					<Link to="/">Home</Link>
				</li>

				{MenuData.map((item, i) => (
					<li key={i}>
						<Link to={item.link}>{item.title}</Link>

						<ul className="submenu">
							{item.sub_menus?.map((sub_menu, index) =>
								<li key={index}>
									<Link to={sub_menu.link}>{sub_menu.title}</Link>
								</li>
							)}
						</ul>
					</li>
				))}

				<li >
					<Link to="/about">About</Link>
				</li>

				<li >
					<Link to="/contact">Contact</Link>
				</li>

				<li>
					<Link to="/">
						<i className="fa fa-user" style={{ paddingLeft: "20px", paddingRight: "20px" }}></i>
						<span style={{ marginLeft: "-15px" }}>+</span>
					</Link>
					<ul className="submenu">
						<li >
							<Link to="/login">
								<i className="fa fa-sign-in" style={{ marginRight: "8px" }} ></i>Login
							</Link>
						</li>
						<li>
							<Link to="/register">
								<i className="fa fa-book" style={{ marginRight: "8px" }}></i>Register
							</Link>
						</li>
						<li>
							<Link to="/logout">
								<i className="fa fa-sign-out" style={{ marginRight: "8px" }}></i>Logout
							</Link>
						</li>
					</ul>
				</li >

				{home_4 && <li><button style={{ marginLeft: "10px" }} className="nav-search-icon">
					<i className="fal fa-search" onClick={() => setOpenSearch(true)}></i></button>
				</li>
				}
			</ul >
			{openSearch && <FullscreenSearch openSearch={openSearch} setOpenSearch={setOpenSearch} />}
		</>
	);
};

export default NavMenuTwo;

