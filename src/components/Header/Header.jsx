import React from 'react';
import {Link} from "react-router-dom";

import './Header.scss'
const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="header__logo">
						<Link to = "/">
							КиноПоиск
						</Link>
					</h1>
					<nav className="menu">

					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
